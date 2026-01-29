import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { EducationSection } from "./components/EducationSection";
import { VideoSection } from "./components/VideoSection";
import { PricingHighlight } from "./components/PricingHighlight";
import { Footer } from "./components/Footer";
import EGCARegistrationPage from "./components/EGCARegistrationPage";
import PricingPage from "./components/PricingPage";
import SuccessStoriesPage from "./components/SuccessStoriesPage";
import BoardVerificationPage from "./components/BoardVerificationPage";
import DGCAGroundClassesPage from "./components/DGCAGroundClassesPage";
import AdminRegistrations from "./components/AdminRegistrations";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EducationSection />
      <VideoSection />
      <PricingHighlight />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/egca-registration" element={<EGCARegistrationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/board-verification" element={<BoardVerificationPage />} />
          <Route path="/dgca-ground-classes" element={<DGCAGroundClassesPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
