import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { navigationData } from '../data/mock';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_pilotjourney-1/artifacts/1bnkp1f0_logo.jpeg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src={LOGO_URL} 
                alt="Edu9 Career Guidance" 
                className="h-10 w-auto rounded-lg"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navigationData.menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:opacity-80 relative group ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-aviation-blue' : 'bg-white'
                  }`} />
                </a>
              ))}
              <Button
                onClick={() => window.open('https://starsite.in/projects/edu9.in/', '_blank')}
                className="bg-aviation-blue hover:bg-aviation-blue-dark text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-aviation-blue/30 hover:-translate-y-0.5"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-slate-700' : 'text-white'} size={24} />
              ) : (
                <Menu className={isScrolled ? 'text-slate-700' : 'text-white'} size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <div className={`rounded-2xl p-6 space-y-4 ${
              isScrolled ? 'bg-slate-50' : 'bg-white/10 backdrop-blur-lg'
            }`}>
              {navigationData.menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block font-medium py-2 transition-colors ${
                    isScrolled ? 'text-slate-700 hover:text-aviation-blue' : 'text-white hover:text-white/80'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://starsite.in/projects/edu9.in/', '_blank');
                }}
                className="w-full bg-aviation-blue hover:bg-aviation-blue-dark text-white rounded-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
  );
};
