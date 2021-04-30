import React from "react";

import MainVideo from "../../components/MainVideo/MainVideo";

import teamTraining from "../../fixtures/teamTraining";

const TeamTraining = () => {
  return (
    <div className="teams-page full-width">
      <MainVideo videoUrl="/teamVideo.mp4" />
      <div className="teams-content">
        {teamTraining.map(({ description, imageUrl }) => (
          <div key={description}>
            <img src={`${process.env.PUBLIC_URL + imageUrl}`} alt={imageUrl} />
            <h4>{description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTraining;
