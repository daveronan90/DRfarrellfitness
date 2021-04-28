import React from "react";
import teamTraining from "../../fixtures/teamTraining";

import "./TeamTraining.scss";

const TeamTraining = () => {
  return (
    <div className="teams-page">
      {teamTraining.map(({ description, imageUrl }) => (
        <div>
          <img src={`${process.env.PUBLIC_URL + imageUrl}`} alt={imageUrl} />
          <h3>{description}</h3>
        </div>
      ))}
    </div>
  );
};

export default TeamTraining;
