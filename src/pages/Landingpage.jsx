import React from "react";
import HeroSection from "../components/landingPage/HeroSection";
import FeaturesSection from "../components/landingPage/FeaturesSection";
import Testimonials from "../components/landingPage/Testimonials";
import Footer from "../components/landingPage/Footer";
import HowItWorks from "../components/landingPage/HowItWorks";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
