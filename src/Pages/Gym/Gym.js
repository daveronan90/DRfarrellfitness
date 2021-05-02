import React from "react";
import GymTimetable from "../../components/GymTimetable/GymTimetable";
import MainVideo from "../../components/MainVideo/MainVideo";

const Gym = () => {
  return (
    <div className="gym-page full-width">
      <MainVideo videoUrl="/OpenGym.mp4" />
      <div className="gym-content">
        <GymTimetable />
      </div>
    </div>
  );
};

export default Gym;
