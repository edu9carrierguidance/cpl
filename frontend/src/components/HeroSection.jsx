import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { heroData, statsData } from '../data/mock';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroData.backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-blue/95 via-aviation-blue/85 to-aviation-blue/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
            {heroData.headline}
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl animate-slide-up-delay">
            {heroData.subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up-delay-2">
            <Button
              size="lg"
              onClick={() => window.open('https://edu9.in/aviation/#booking', '_blank')}
              className="bg-white text-aviation-blue hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 group"
            >
              {heroData.ctaText}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-delay">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center transition-all duration-300 hover:bg-white/15 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};
