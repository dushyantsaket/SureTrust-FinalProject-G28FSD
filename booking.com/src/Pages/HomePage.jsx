import React from "react";
import HeroSection from "../components/HeroSection";
import OffersSection from "../components/OfferSection";
import ExploreIndia from "../components/ExploreIndia";
import UniqueProperties from "../components/UniqueProperties";
import WhyBooking from "../components/WhyBooking";
import PopularDestinations from "../components/PopularDestinations";
import PropertyTypes from "../components/PropertyType";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <OffersSection />
      <ExploreIndia />
      <PropertyTypes />
      <UniqueProperties />
      <WhyBooking />
      <PopularDestinations />
    </div>
  );
};

export default HomePage;
