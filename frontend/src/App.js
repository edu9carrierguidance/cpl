import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { EducationSection } from "./components/EducationSection";
import { PricingHighlight } from "./components/PricingHighlight";
import { Footer } from "./components/Footer";
import EGCARegistrationPage from "./components/EGCARegistrationPage";
import PricingPage from "./components/PricingPage";
import SuccessStoriesPage from "./components/SuccessStoriesPage";
import BoardVerificationPage from "./components/BoardVerificationPage";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EducationSection />
      <PricingHighlight />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/egca-registration" element={<EGCARegistrationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
