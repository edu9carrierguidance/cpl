import React, { useState } from 'react';
import { X, User, Phone, Mail, MapPin, Calendar, GraduationCap, Eye, Stethoscope, Plane, Users, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';
import axios from 'axios';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_pilotjourney-1/artifacts/1bnkp1f0_logo.jpeg";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const RegistrationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailId: '',
    currentCity: '',
    age: '',
    educationalBackground: '',
    visionStatus: '',
    medicalStatus: '',
    licenseInterest: '',
    emergencyContactName: '',
    emergencyContactRelation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast.success('Registration Successful!', {
      description: 'Our team will contact you within 24 hours.'
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailId: '',
        currentCity: '',
        age: '',
        educationalBackground: '',
        visionStatus: '',
        medicalStatus: '',
        licenseInterest: '',
        emergencyContactName: '',
        emergencyContactRelation: ''
      });
      onClose();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Successful!</h3>
            <p className="text-slate-600 text-center">
              Thank you for registering. Our admissions team will contact you within 24 hours.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Edu9" className="h-10 w-auto rounded" />
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">
                Pilot Training Registration
              </DialogTitle>
              <p className="text-sm text-slate-500 mt-1">
                Start your journey to become a commercial pilot
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Personal Details Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#0055A5] font-semibold">
              <User className="w-5 h-5" />
              <h3>Personal Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailId">Email ID *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="emailId"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.emailId}
                    onChange={(e) => handleInputChange('emailId', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentCity">Current Place/City *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="currentCity"
                    placeholder="Enter your city"
                    value={formData.currentCity}
                    onChange={(e) => handleInputChange('currentCity', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Requirements Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#0055A5] font-semibold">
              <GraduationCap className="w-5 h-5" />
              <h3>Eligibility Requirements</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="age"
                    type="number"
                    min="16"
                    max="65"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-slate-500">Minimum age: 16 years for Student Pilot License</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="educationalBackground">Educational Background *</Label>
                <Select
                  value={formData.educationalBackground}
                  onValueChange={(value) => handleInputChange('educationalBackground', value)}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10+2_pcm">10+2 with Physics & Mathematics</SelectItem>
                    <SelectItem value="10+2_other">10+2 without Physics & Mathematics</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="post_graduate">Post Graduate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-slate-500">10+2 with Physics & Mathematics required for CPL</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="visionStatus">Vision/Eyesight Status *</Label>
                <div className="relative">
                  <Eye className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                  <Select
                    value={formData.visionStatus}
                    onValueChange={(value) => handleInputChange('visionStatus', value)}
                    required
                  >
                    <SelectTrigger className="w-full pl-10">
                      <SelectValue placeholder="Select vision status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6/6">6/6 (Perfect Vision)</SelectItem>
                      <SelectItem value="corrected_6/6">Corrected to 6/6 (With Glasses/Lenses)</SelectItem>
                      <SelectItem value="other">Other (Needs Assessment)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicalStatus">Medical Fitness Status *</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                  <Select
                    value={formData.medicalStatus}
                    onValueChange={(value) => handleInputChange('medicalStatus', value)}
                    required
                  >
                    <SelectTrigger className="w-full pl-10">
                      <SelectValue placeholder="Select medical status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class1">Class 1 Medical Certificate</SelectItem>
                      <SelectItem value="class2">Class 2 Medical Certificate</SelectItem>
                      <SelectItem value="not_yet">Not Yet Obtained</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* License Interest Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#0055A5] font-semibold">
              <Plane className="w-5 h-5" />
              <h3>License Interest</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="licenseInterest">Which license are you interested in? *</Label>
              <Select
                value={formData.licenseInterest}
                onValueChange={(value) => handleInputChange('licenseInterest', value)}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select license type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ppl">Private Pilot License (PPL)</SelectItem>
                  <SelectItem value="cpl">Commercial Pilot License (CPL)</SelectItem>
                  <SelectItem value="both">Both PPL & CPL</SelectItem>
                  <SelectItem value="undecided">Not Sure / Need Guidance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#0055A5] font-semibold">
              <Users className="w-5 h-5" />
              <h3>Emergency Contact</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContactName">Contact Person Name *</Label>
                <Input
                  id="emergencyContactName"
                  placeholder="Enter emergency contact name"
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyContactRelation">Relation *</Label>
                <Select
                  value={formData.emergencyContactRelation}
                  onValueChange={(value) => handleInputChange('emergencyContactRelation', value)}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select relation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="father">Father</SelectItem>
                    <SelectItem value="mother">Mother</SelectItem>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="guardian">Guardian</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0055A5] hover:bg-[#003d7a] text-white py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Submit Registration
                </span>
              )}
            </Button>
            <p className="text-xs text-slate-500 text-center mt-3">
              By submitting, you agree to be contacted by our admissions team.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
