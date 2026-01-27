import React from 'react';
import { MapPin, Globe2, ChevronRight } from 'lucide-react';
import { ftoPartnershipsData } from '../data/mock';

export const FTOPartnerships = () => {
  return (
    <section id="ftos" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-aviation-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-aviation-blue font-semibold text-sm uppercase tracking-wider mb-4 bg-aviation-blue/10 px-4 py-2 rounded-full">
            <Globe2 className="w-4 h-4" />
            Global Network
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {ftoPartnershipsData.sectionTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {ftoPartnershipsData.sectionSubtitle}
          </p>
        </div>

        {/* FTO Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {ftoPartnershipsData.regions.map((region, index) => (
            <div
              key={region.id}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-aviation-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Region Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{region.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {region.region}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {region.ftos.length} Partner FTOs
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-aviation-blue/10 rounded-full flex items-center justify-center group-hover:bg-aviation-blue transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-aviation-blue group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* FTO List */}
                <ul className="space-y-3">
                  {region.ftos.map((fto, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-700 group/item hover:text-aviation-blue transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:text-aviation-blue group-hover/item:translate-x-1 transition-all" />
                      <span className="font-medium">{fto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-aviation-blue font-semibold hover:gap-4 transition-all duration-300"
          >
            View All Partner FTOs
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
