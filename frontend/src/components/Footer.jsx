import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { contactData, navigationData } from '../data/mock';
import { toast } from 'sonner';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_pilotjourney-1/artifacts/1bnkp1f0_logo.jpeg";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you! We will contact you shortly.', {
      description: 'Our career counselor will reach out within 24 hours.'
    });
    
    setFormData({ name: '', phone: '', email: '' });
    setIsSubmitting(false);
  };

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Our Programs', href: '#services' },
    { label: 'FTO Partners', href: '#ftos' },
    { label: 'Success Stories', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="relative">
      {/* CTA Section */}
      <div className="bg-slate-900 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Lead Magnet Card */}
          <div className="relative bg-gradient-to-r from-aviation-blue to-aviation-blue-dark rounded-3xl p-8 md:p-12 mb-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {contactData.finalCta}
                </h2>
                <p className="text-white/80 text-lg">
                  Get personalized guidance from our aviation experts. Book your free career counseling session now.
                </p>
              </div>

              {/* Quick Form */}
              <form onSubmit={handleSubmit} className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3 min-w-[180px] focus:bg-white/20"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3 min-w-[180px] focus:bg-white/20"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-aviation-blue hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Started'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-6">
                <img 
                  src={LOGO_URL} 
                  alt="Edu9 Career Guidance" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-slate-400 leading-relaxed mb-6">
                India's trusted career guidance partner for aspiring commercial pilots. Your dream of flying starts here.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 hover:bg-aviation-blue rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-slate-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-aviation-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-slate-800 group-hover:bg-aviation-blue rounded-lg flex items-center justify-center transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Call Us</span>
                      <span className="font-medium">+91 {contactData.phone}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-slate-800 group-hover:bg-aviation-blue rounded-lg flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Email Us</span>
                      <span className="font-medium">{contactData.email}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-slate-400">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Visit Us</span>
                      <span className="font-medium">{contactData.address}</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-slate-400">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Working Hours</span>
                      <span className="font-medium">Mon - Sat: 9AM - 7PM</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div>
              <h4 className="text-white font-semibold mb-6">Find Us</h4>
              <div className="rounded-2xl overflow-hidden h-48 bg-slate-800">
                <iframe
                  src={contactData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Edu9 Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Edu9 Career Guidance. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
