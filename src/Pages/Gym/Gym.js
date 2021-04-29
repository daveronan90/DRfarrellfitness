import React from "react";
import GymTimetable from "../../components/GymTimetable/GymTimetable";
import MainVideo from "../../components/MainVideo/MainVideo";

import "./Gym.scss";

const Gym = () => {
  return (
    <div className="gym-page full-width">
      <MainVideo videoUrl="/mainVideo.mp4" />
      <div className="gym-content">
        <GymTimetable />
      </div>
    </div>
  );
};

export default Gym;
