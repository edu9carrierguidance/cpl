import React from 'react';
import { ArrowLeft, Star, MapPin, Quote, Award, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const SuccessStoriesPage = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Avinash",
      rating: 5,
      location: "Visakhapatnam, Andhra Pradesh",
      review: "Excellent guidance from EDU9 Career Guidance for CPL training. Everything from DGCA exams to flight school selection was explained clearly. Highly recommended for serious CPL aspirants.",
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 2,
      name: "Mahendra",
      rating: 5,
      location: "Vijayawada, Andhra Pradesh",
      review: "Very satisfied with the CPL career guidance provided by EDU9. The mentors are knowledgeable, supportive, and honest. It gave me great clarity and confidence about my aviation career.",
      color: "from-[#003d7a] to-[#002855]"
    },
    {
      id: 3,
      name: "Sekhar",
      rating: 5,
      location: "Warangal, Telangana",
      review: "EDU9 Career Guidance offers professional and personalized CPL guidance. All my doubts were patiently answered, and the process was explained step by step. A truly reliable platform.",
      color: "from-[#0055A5] to-[#003d7a]"
    },
    {
      id: 4,
      name: "Purna",
      rating: 5,
      location: "Nizamabad, Telangana",
      review: "Great experience with EDU9 Career Guidance for CPL training. Transparent advice, practical insights, and excellent support throughout. Definitely deserving of a 5-star rating.",
      color: "from-[#D4A843] to-[#B8922E]"
    }
  ];

  const specialVideos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/giZml5v5Ci4",
      title: "Success Story 1"
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/jHxbnCoqvfQ",
      title: "Success Story 2"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/wjqAIxGOYWM",
      title: "Success Story 3"
    },
    {
      id: 4,
      embedUrl: "https://www.youtube.com/embed/eS5AOerIOLA",
      title: "Success Story 4"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
      />
    ));
  };

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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-white font-medium">Student Testimonials</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Success Stories
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Hear from our students who have successfully started their journey to becoming commercial pilots with Edu9 Career Guidance.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-slate-500 text-sm">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-slate-900">
                5.0 <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-slate-500 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">98%</div>
              <div className="text-slate-500 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">10+</div>
              <div className="text-slate-500 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${testimonial.color} p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <div className="flex items-center gap-1 text-white/80 text-sm">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white font-bold">{testimonial.rating}/5</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-slate-200" />
                    <p className="text-slate-600 leading-relaxed pl-6">
                      {testimonial.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Attraction - Video Section */}
      <div className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/30 mb-6">
              <Sparkles className="w-4 h-4" />
              Special Attraction
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Watch Our Success Stories
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real stories from real pilots. See how Edu9 Career Guidance has transformed aviation dreams into reality.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {specialVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
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
                <div className="p-4 bg-gradient-to-r from-aviation-blue to-aviation-blue-dark" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Edu9 Success Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r rounded-3xl p-8 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, #0055A5 0%, #003d7a 100%)' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful pilots who started their journey with Edu9 Career Guidance. Your dream of flying is closer than you think.
            </p>
            <Button
              onClick={() => navigate('/#contact')}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Start Your Journey Today
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

export default SuccessStoriesPage;
