import React from 'react';
import { Stethoscope, FileCheck, ClipboardCheck, Hash, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/mock';

const iconMap = {
  Stethoscope,
  FileCheck,
  ClipboardCheck,
  Hash,
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aviation-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-aviation-blue font-semibold text-sm uppercase tracking-wider mb-4 bg-aviation-blue/10 px-4 py-2 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {servicesData.sectionTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {servicesData.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-aviation-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aviation-blue group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-aviation-blue group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-aviation-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More */}
                <a
                  href="#"
                  className="inline-flex items-center text-aviation-blue font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
