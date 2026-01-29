from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Registration Form Models
class RegistrationCreate(BaseModel):
    fullName: str
    mobileNumber: str
    emailId: str
    currentCity: str
    age: str
    educationalBackground: str
    visionStatus: str
    medicalStatus: str
    licenseInterest: str
    emergencyContactName: str
    emergencyContactRelation: str

class Registration(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    fullName: str
    mobileNumber: str
    emailId: str
    currentCity: str
    age: str
    educationalBackground: str
    visionStatus: str
    medicalStatus: str
    licenseInterest: str
    emergencyContactName: str
    emergencyContactRelation: str
    submittedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Registration Form Endpoints
@api_router.post("/registrations", response_model=Registration)
async def create_registration(input: RegistrationCreate):
    registration_dict = input.model_dump()
    registration_obj = Registration(**registration_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = registration_obj.model_dump()
    doc['submittedAt'] = doc['submittedAt'].isoformat()
    
    _ = await db.registrations.insert_one(doc)
    logger.info(f"New registration received: {registration_obj.fullName} - {registration_obj.emailId}")
    return registration_obj

@api_router.get("/registrations", response_model=List[Registration])
async def get_registrations():
    # Exclude MongoDB's _id field from the query results
    registrations = await db.registrations.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for reg in registrations:
        if isinstance(reg.get('submittedAt'), str):
            reg['submittedAt'] = datetime.fromisoformat(reg['submittedAt'])
    
    return registrations

@api_router.get("/registrations/count")
async def get_registrations_count():
    count = await db.registrations.count_documents({})
    return {"count": count}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()