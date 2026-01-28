import React from 'react';
import { ArrowLeft, ClipboardCheck, FileText, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const BoardVerificationPage = () => {
  const navigate = useNavigate();

  const requiredDocuments = [
    {
      id: 1,
      icon: FileText,
      title: "SSC / 10th Class Original Memo",
      description: "Original Secondary School Certificate (SSC) or 10th class memorandum issued by the respective education board.",
      details: ["Must be original document", "Photocopies not accepted for verification", "Should be clearly legible"]
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Intermediate / +2 Original Memo",
      description: "Original Intermediate or +2 certificate/memorandum with PCM subjects (Physics, Chemistry, Mathematics).",
      details: ["Must be original document", "Should show PCM subjects with marks", "Minimum 50% aggregate required"]
    }
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
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Board Verification
              </h1>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">
            Documents required for educational board verification as mandated by DGCA for pilot licensing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Board Verification Required Documents
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The following original documents are mandatory for board verification process with DGCA.
            </p>
          </div>

          {/* Documents Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {requiredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-aviation-blue to-aviation-blue-dark p-6" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <doc.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{doc.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-6">{doc.description}</p>
                  
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {doc.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h4 className="font-semibold text-amber-800 mb-2">Important Note</h4>
              <p className="text-amber-700">
                All documents must be original for verification purposes. The verification process is mandatory as per DGCA regulations for obtaining a Commercial Pilot License (CPL) in India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Help with Board Verification?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our team will guide you through the entire board verification process. Get expert assistance today.
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

export default BoardVerificationPage;
