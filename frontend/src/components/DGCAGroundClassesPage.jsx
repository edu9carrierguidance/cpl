import React from 'react';
import { ArrowLeft, GraduationCap, Scale, Cloud, Compass, Settings, Plane, Radio, BookOpen, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const DGCAGroundClassesPage = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 1,
      icon: Scale,
      title: "Air Regulations",
      description: "Covers aviation laws, DGCA rules, airspace regulations, and safety procedures required for legal and safe flying.",
      topics: ["Aviation Laws", "DGCA Rules", "Airspace Regulations", "Safety Procedures"],
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 2,
      icon: Cloud,
      title: "Aviation Meteorology",
      description: "Deals with weather conditions such as winds, clouds, storms, and interpretation of weather reports used in aviation.",
      topics: ["Weather Conditions", "Winds & Clouds", "Storm Patterns", "Weather Reports Interpretation"],
      color: "from-[#003d7a] to-[#002855]"
    },
    {
      id: 3,
      icon: Compass,
      title: "Air Navigation",
      description: "Teaches flight planning, map reading, navigation charts, latitude & longitude, and route calculations.",
      topics: ["Flight Planning", "Map Reading", "Navigation Charts", "Route Calculations"],
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 4,
      icon: Settings,
      title: "Technical General",
      description: "Explains basic aircraft systems including engines, instruments, electrical systems, and flight controls.",
      topics: ["Aircraft Engines", "Flight Instruments", "Electrical Systems", "Flight Controls"],
      color: "from-[#D4A843] to-[#B8922E]"
    },
    {
      id: 5,
      icon: Plane,
      title: "Technical Specific",
      description: "Focuses on the systems, limitations, and performance of a specific aircraft type.",
      topics: ["Aircraft Systems", "Operating Limitations", "Performance Data", "Type-Specific Knowledge"],
      color: "from-[#003d7a] to-[#002855]"
    },
    {
      id: 6,
      icon: Radio,
      title: "Radio Telephony (RTR)",
      description: "Trains pilots in standard aviation communication with Air Traffic Control using correct phraseology.",
      topics: ["ATC Communication", "Standard Phraseology", "Radio Procedures", "Emergency Communications"],
      color: "from-[#0055A5] to-[#003d7a]"
    }
  ];

  const quickList = [
    "Air Regulations",
    "Aviation Meteorology",
    "Air Navigation",
    "Technical General",
    "Technical Specific",
    "Radio Telephony (RTR)"
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
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                DGCA Ground Classes
              </h1>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">
            Comprehensive ground school training covering all subjects required for DGCA CPL examinations.
          </p>
        </div>
      </div>

      {/* Quick List Section */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-aviation-blue" />
            <h2 className="text-lg font-semibold text-slate-900">Quick List (Exam Subjects)</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickList.map((subject, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-aviation-blue/10 text-aviation-blue px-4 py-2 rounded-full text-sm font-medium"
              >
                <span className="w-5 h-5 bg-aviation-blue text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Detailed Subject Overview
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Master each subject with our comprehensive curriculum designed for DGCA CPL success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${subject.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <subject.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white/70 text-sm">Subject {subject.id}</span>
                      <h3 className="text-lg font-bold text-white">{subject.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{subject.description}</p>
                  
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Key Topics
                  </h4>
                  <ul className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready to Start Your Ground Classes?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Enroll in our comprehensive DGCA ground school program and get expert guidance for all 6 subjects.
            </p>
            <Button
              onClick={() => navigate('/#contact')}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Us to Enroll
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

export default DGCAGroundClassesPage;
