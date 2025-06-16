import Hero from "../pages/Hero";
import LearningPath from "../pages/LearningPath";
import ToolsSection from "../pages/Testimonials";
import Testimonials from "../pages/ToolsSection";
import React from "react";
const HomePage = () => {
  return (
    <div className="page-content">
      <Hero/>
      <LearningPath />
      <ToolsSection/>
      <Testimonials />
    </div>
  );
};

export default HomePage;