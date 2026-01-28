import React from 'react';
import { Play } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_pilotjourney-1/artifacts/1bnkp1f0_logo.jpeg";

export const VideoSection = () => {
  const specialVideos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/giZml5v5Ci4",
      title: "Commercial Pilot License Medical Test"
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/jHxbnCoqvfQ",
      title: "Engineering Vs Pilot Career"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/wjqAIxGOYWM",
      title: "CPL Complete Details"
    },
    {
      id: 4,
      embedUrl: "https://www.youtube.com/embed/eS5AOerIOLA",
      title: "How To Become a Pilot"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-aviation-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-amber-500/30 mb-6">
            <img 
              src={LOGO_URL} 
              alt="Edu9" 
              className="h-8 w-auto rounded"
            />
            <span className="text-base">Edu9 Career Guidance</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Watch & Learn
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover everything about becoming a commercial pilot through our informative video guides.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {specialVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{video.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
