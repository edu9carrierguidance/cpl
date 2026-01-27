import React from 'react';
import { ArrowLeft, FileText, GraduationCap, User, PenTool, FileCheck, CreditCard, MapPin, Mail, Phone, Droplets, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const EGCARegistrationPage = () => {
  const navigate = useNavigate();

  const requiredDocuments = [
    { icon: User, label: "Student Photo", description: "Recent passport size photograph" },
    { icon: PenTool, label: "Signature", description: "Digital signature in specified format" },
    { icon: FileCheck, label: "SSC Memo", description: "Secondary School Certificate memorandum" },
    { icon: CreditCard, label: "ID Proof", description: "Aadhaar Card / PAN Card / Passport" },
    { icon: MapPin, label: "Address Proof", description: "Valid address proof document" },
    { icon: Mail, label: "Mail ID", description: "Active email address for communication" },
    { icon: Phone, label: "Mobile No.", description: "Personal mobile number" },
    { icon: Droplets, label: "Blood Group", description: "Blood group certificate/document" },
    { icon: Phone, label: "Parent Mobile No.", description: "Parent/Guardian contact number" },
    { icon: Mail, label: "Parent Mail ID", description: "Parent/Guardian email address" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-aviation-blue"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Required Documents for EGCA Registration
              </h1>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">
            Complete list of documents required to register on the eGCA portal for aspiring pilots in India.
          </p>
        </div>
      </div>

      {/* Qualification Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Qualification
                </h2>
                <p className="text-lg md:text-xl text-slate-700">
                  <span className="font-semibold">Intermediate / +2 with PCM</span> 
                  <span className="text-amber-600 font-bold"> greater than 50%</span>
                </p>
                <p className="text-slate-500 mt-2">
                  Physics, Chemistry, and Mathematics are mandatory subjects with minimum 50% aggregate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Documents Checklist
            </h2>
            <p className="text-slate-600">
              Ensure you have all the following documents ready before starting your eGCA registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aviation-blue/10 rounded-xl flex items-center justify-center group-hover:bg-aviation-blue transition-colors duration-300">
                    <doc.icon className="w-6 h-6 text-aviation-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{doc.label}</h3>
                    <p className="text-sm text-slate-500">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Help with eGCA Registration?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our experts will guide you through the entire registration process. Get personalized assistance today.
            </p>
            <Button
              onClick={() => navigate('/#contact')}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Us for Assistance
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Edu9 Career Guidance. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EGCARegistrationPage;
