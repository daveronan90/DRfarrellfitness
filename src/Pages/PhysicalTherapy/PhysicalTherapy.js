import React from "react";
import physicalTherapyServices from "../../fixtures/physicalTherapyServices";

import "./PhysicalTherapy.scss";

const PhysicalTherapy = () => {
  return (
    <div className="therapy-page">
      {physicalTherapyServices.map(
        ({ title, description, membersPrice, nonMembersPrice, imageUrl }) => (
          <div>
            <img src={`${process.env.PUBLIC_URL + imageUrl}`} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Non-Members €{nonMembersPrice}</h3>
            <h3>Members €{membersPrice}</h3>
          </div>
        )
      )}
    </div>
  );
};

export default PhysicalTherapy;
