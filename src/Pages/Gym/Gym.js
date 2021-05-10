import React from "react";
import GymTimetable from "../../components/GymTimetable/GymTimetable";
import MainVideo from "../../components/MainVideo/MainVideo";
import PricingGym from "../../components/Pricing/PricingGym";
import PricingGymClasses from "../../components/Pricing/PricingGymClasses";

const Gym = () => {
  return (
    <div className="gym-page full-width">
      <MainVideo videoUrl="/OpenGym.mp4" />
      <div className="gym-content">
        <GymTimetable />
      </div>
      <PricingGym />
      <PricingGymClasses />
    </div>
  );
};

export default Gym;
