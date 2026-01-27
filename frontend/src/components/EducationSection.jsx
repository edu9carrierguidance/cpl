import React from 'react';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { educationData } from '../data/mock';

export const EducationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 20.93 9.9l8.485-8.485h-1.414zM32.656 0L26.172 6.485 27.586 7.9l6.485-6.485h-1.414zM38.313 0L32.828 5.485 34.243 6.9l5.485-5.485h-1.414zM0 0l.828.828-1.415 1.415L0 .828V0zm0 5.373l3.657 3.657-1.414 1.415L0 8.2V5.374zm0 5.656l6.485 6.485-1.414 1.415L0 13.857v-2.83zm0 5.657l9.314 9.313-1.415 1.415L0 19.514v-2.83zm0 5.657l12.142 12.142-1.414 1.414L0 25.172v-2.83zM0 28l14.97 14.97-1.414 1.414L0 30.828V28zm0 5.657l17.8 17.8-1.415 1.414L0 36.485v-2.828zm0 5.656L20.627 60h-2.828L0 42.142v-2.83zm0 5.657L23.456 60h-2.83L0 47.8v-2.83zm0 5.656L26.284 60h-2.828L0 53.456v-2.828zM0 57.314L28.97 60H0v-2.686zm0 .83L31.8 60H0v-.857z' fill='%23003366' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-aviation-blue font-semibold text-sm uppercase tracking-wider mb-4 bg-aviation-blue/10 px-4 py-2 rounded-full">
            <GraduationCap className="w-4 h-4" />
            Education Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {educationData.sectionTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {educationData.sectionSubtitle}
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-16">
          {educationData.programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-aviation-blue/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="relative w-full h-72 lg:h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-3xl" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-aviation-blue flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-aviation-blue hover:bg-aviation-blue-dark text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-aviation-blue/30 hover:-translate-y-1 group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
