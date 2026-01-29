import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Phone, Mail, MapPin, Calendar, GraduationCap, Eye, Stethoscope, Plane, RefreshCw, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminRegistrations = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/registrations`);
      setRegistrations(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching registrations:', err);
      setError('Failed to load registrations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEducationLabel = (value) => {
    const labels = {
      '10+2_pcm': '10+2 with Physics & Mathematics',
      '10+2_other': '10+2 without Physics & Mathematics',
      'graduate': 'Graduate',
      'post_graduate': 'Post Graduate',
      'other': 'Other'
    };
    return labels[value] || value;
  };

  const getVisionLabel = (value) => {
    const labels = {
      '6/6': '6/6 (Perfect Vision)',
      'corrected_6/6': 'Corrected to 6/6',
      'other': 'Other'
    };
    return labels[value] || value;
  };

  const getMedicalLabel = (value) => {
    const labels = {
      'class1': 'Class 1 Medical',
      'class2': 'Class 2 Medical',
      'not_yet': 'Not Yet Obtained'
    };
    return labels[value] || value;
  };

  const getLicenseLabel = (value) => {
    const labels = {
      'ppl': 'Private Pilot License (PPL)',
      'cpl': 'Commercial Pilot License (CPL)',
      'both': 'Both PPL & CPL',
      'undecided': 'Need Guidance'
    };
    return labels[value] || value;
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Mobile', 'Email', 'City', 'Age', 'Education', 'Vision', 'Medical', 'License Interest', 'Emergency Contact', 'Relation', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...registrations.map(reg => [
        reg.fullName,
        reg.mobileNumber,
        reg.emailId,
        reg.currentCity,
        reg.age,
        getEducationLabel(reg.educationalBackground),
        getVisionLabel(reg.visionStatus),
        getMedicalLabel(reg.medicalStatus),
        getLicenseLabel(reg.licenseInterest),
        reg.emergencyContactName,
        reg.emergencyContactRelation,
        formatDate(reg.submittedAt)
      ].map(field => `"${field}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `edu9_registrations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-aviation-blue"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={fetchRegistrations}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              onClick={exportToCSV}
              disabled={registrations.length === 0}
              className="bg-[#0055A5] hover:bg-[#003d7a] text-white flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-12" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Student Registrations
              </h1>
              <p className="text-white/80">
                {registrations.length} total registration{registrations.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-[#0055A5]/30 border-t-[#0055A5] rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={fetchRegistrations}>Try Again</Button>
            </div>
          ) : registrations.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No Registrations Yet</h3>
              <p className="text-slate-500">Student registrations will appear here.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {registrations.map((reg, index) => (
                <div
                  key={reg.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Card Header */}
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0055A5] rounded-full flex items-center justify-center text-white font-bold">
                        {reg.fullName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{reg.fullName}</h3>
                        <p className="text-sm text-slate-500">{formatDate(reg.submittedAt)}</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-[#D4A843]/20 text-[#B8922E] rounded-full text-sm font-medium">
                      {getLicenseLabel(reg.licenseInterest)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Contact Info */}
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Mobile</p>
                          <p className="font-medium text-slate-900">{reg.mobileNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Email</p>
                          <p className="font-medium text-slate-900">{reg.emailId}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">City</p>
                          <p className="font-medium text-slate-900">{reg.currentCity}</p>
                        </div>
                      </div>

                      {/* Eligibility Info */}
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Age</p>
                          <p className="font-medium text-slate-900">{reg.age} years</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Education</p>
                          <p className="font-medium text-slate-900">{getEducationLabel(reg.educationalBackground)}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Vision</p>
                          <p className="font-medium text-slate-900">{getVisionLabel(reg.visionStatus)}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Stethoscope className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Medical Status</p>
                          <p className="font-medium text-slate-900">{getMedicalLabel(reg.medicalStatus)}</p>
                        </div>
                      </div>

                      {/* Emergency Contact */}
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#0055A5] mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase">Emergency Contact</p>
                          <p className="font-medium text-slate-900">{reg.emergencyContactName} ({reg.emergencyContactRelation})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrations;
