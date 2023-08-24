import React from "react";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import HeroSection from "./HeroSection/HeroSection";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import BackgroundAudio from "../../Components/Howler/BackgroundAudio";


const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <div className=" bg-[#FFFDFC]">

      <HeroSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
