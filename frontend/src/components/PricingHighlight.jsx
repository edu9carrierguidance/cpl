import React from 'react';
import { Sparkles, CheckCircle2, CreditCard, Eye, Wallet, Gift } from 'lucide-react';
import { pricingHighlightData } from '../data/mock';

export const PricingHighlight = () => {
  const benefitIcons = [Wallet, Eye, CreditCard, Gift];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 50%, #1e293b 100%)' }}>
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/30">
                <Sparkles className="w-4 h-4" />
                {pricingHighlightData.badge}
              </div>
            </div>

            {/* Content */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">
                {pricingHighlightData.title}
              </h2>
              <p className="text-xl md:text-2xl text-sky-200 font-medium mb-6">
                {pricingHighlightData.subtitle}
              </p>
              <p className="text-white/70 leading-relaxed max-w-2xl mx-auto text-lg">
                {pricingHighlightData.description}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {pricingHighlightData.benefits.map((benefit, index) => {
                const IconComponent = benefitIcons[index];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-sky-300" />
                    </div>
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>
                );
              })}
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-[2.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
