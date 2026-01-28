import React from 'react';
import { ArrowLeft, Wallet, Stethoscope, GraduationCap, Plane, Globe, IndianRupee, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate = useNavigate();

  const pricingStages = [
    {
      id: 1,
      icon: Wallet,
      title: "Career Guidance",
      price: "₹10,000",
      description: "Professional career counseling and guidance for aspiring pilots",
      features: ["One-on-one counseling", "Career roadmap planning", "Eligibility assessment"],
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 2,
      icon: Stethoscope,
      title: "C2/C1 Medicals, Computer No, Board Verification",
      price: "₹60,000",
      description: "Complete documentation and medical certification process",
      features: ["C2/C1 Medical examination", "DGCA Computer number", "Board verification certificate"],
      color: "from-[#003d7a] to-[#002855]"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Ground Classes",
      price: "₹1,40,000",
      description: "Comprehensive ground school training for 3 subjects",
      features: ["Navigation", "Meteorology", "Air Regulations"],
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 4,
      icon: Plane,
      title: "Flying in India",
      price: "₹55 Lakhs",
      description: "Complete flight training at DGCA approved FTOs in India",
      features: ["200+ flight hours", "CPL training", "Type rating preparation"],
      color: "from-[#D4A843] to-[#B8922E]"
    },
    {
      id: 5,
      icon: Globe,
      title: "Flying in South Africa",
      price: "₹39 Lakhs",
      description: "International flight training program",
      features: ["World-class training facilities", "International exposure", "Faster completion"],
      note: "*Excluding visa charges",
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 6,
      icon: Plane,
      title: "South Africa Conversion Charges",
      price: "₹4 Lakhs",
      description: "License conversion for South Africa trained pilots",
      features: ["15 hours flying", "DGCA conversion", "Documentation support"],
      note: "Required for SA trained pilots",
      color: "from-[#003d7a] to-[#002855]"
    },
    {
      id: 7,
      icon: IndianRupee,
      title: "Type Rating",
      price: "₹10-15 Lakhs",
      description: "Aircraft type-specific certification",
      features: ["Aircraft model specific", "Simulator training", "Airline requirements"],
      note: "Depends on aircraft model",
      color: "from-slate-700 to-slate-900"
    }
  ];

  const totalIndia = "₹67-72 Lakhs";
  const totalSouthAfrica = "₹56-61 Lakhs (approx.)";

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A843] text-slate-900 font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg mb-6">
            <Wallet className="w-4 h-4" />
            Edu9 Beauty
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stage-wise Payment Structure
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Transparent, flexible pricing with no hidden costs. Pay as you progress through your pilot training journey.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {pricingStages.map((stage, index) => (
              <div
                key={stage.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Section - Stage Info */}
                  <div className={`lg:w-1/3 p-8 bg-gradient-to-br ${stage.color} text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                        <stage.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white/80 font-medium">Stage {stage.id}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2">{stage.title}</h3>
                    <p className="text-white/80 text-sm">{stage.description}</p>
                  </div>

                  {/* Right Section - Price & Features */}
                  <div className="lg:w-2/3 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {stage.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                        {stage.price}
                      </div>
                      {stage.note && (
                        <p className="text-xs text-slate-500 max-w-[200px]">{stage.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Summary */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold">Total (Flying in India)</h3>
              </div>
              <div className="text-4xl font-bold text-amber-400 mb-2">{totalIndia}</div>
              <p className="text-slate-400 text-sm">Career Guidance + Documentation + Ground Classes + Flying + Type Rating</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-rose-400" />
                <h3 className="text-xl font-bold">Total (Flying in South Africa)</h3>
              </div>
              <div className="text-4xl font-bold text-rose-400 mb-2">{totalSouthAfrica}</div>
              <p className="text-slate-400 text-sm">Includes Conversion Charges + Type Rating (excluding visa charges)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-aviation-blue to-aviation-blue-dark rounded-3xl p-8 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Pilot Journey?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get personalized guidance on the best training path for you. Our experts will help you plan your journey.
            </p>
            <Button
              onClick={() => navigate('/#contact')}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Us Today
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

export default PricingPage;
