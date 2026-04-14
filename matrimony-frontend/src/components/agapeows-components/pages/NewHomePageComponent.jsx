import React from "react";
// Import New Template CSS (only the ones not already in main.jsx)
import "../../../assets/new-template/css/jquery-ui.css";
import "../../../assets/new-template/css/style.css";

import MainLayout from "../layout/MainLayout";
import CountModal from "../../CountModal";

import HeroSearchSection from "../../new-template/HeroSearchSection";
import TrustBrandsSection from "../../new-template/TrustBrandsSection";
import QuickAccessSection from "../../new-template/QuickAccessSection";
import AboutWelcomeSection from "../../new-template/AboutWelcomeSection";
import WhyChooseUsSection from "../../new-template/WhyChooseUsSection";
import FeaturesSection from "../../new-template/FeaturesSection";
import HowItWorksSection from "../../new-template/HowItWorksSection";
import RecentCouplesSection from "../../new-template/RecentCouplesSection";
import TeamSection from "../../new-template/TeamSection";
import GallerySection from "../../new-template/GallerySection";
import BlogSection from "../../new-template/BlogSection";
import FindYourMatchCTASection from "../../new-template/FindYourMatchCTASection";
import FooterSection from "../../new-template/FooterSection";

const NewHomePageComponent = () => {
  return (
    <div className="min-h-screen" id="new-homepage-wrapper">
      <div className="fixed top-0 left-0 right-0 z-50">
        <MainLayout />
      </div>
      <div className="pt-16">
        <h1 style={{ background: 'red', color: 'white', textAlign: 'center' }}>CHECKING UPDATE...</h1>
        <HeroSearchSection />
        <TrustBrandsSection />
        <QuickAccessSection />
        <AboutWelcomeSection />
        <WhyChooseUsSection />
        <FeaturesSection />

        {/* Retention: Keeping the original Count section as requested */}
        <CountModal />

        <HowItWorksSection />
        <RecentCouplesSection />
        <TeamSection />
        <GallerySection />
        <BlogSection />
        <FindYourMatchCTASection />
        <FooterSection />
      </div>
    </div>
  );
};

export default NewHomePageComponent;
