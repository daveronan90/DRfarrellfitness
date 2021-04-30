import React from "react";

import physicalTherapyServices from "../../fixtures/physicalTherapyServices";

const PhysicalTherapy = () => {
  return (
    <div className="therapy-page full-width">
    <div className="therapy-content">
      {physicalTherapyServices.map(
        ({ title, description, membersPrice, nonMembersPrice, imageUrl }) => (
          <div key={title}>
            <img src={`${process.env.PUBLIC_URL + imageUrl}`} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Non-Members €{nonMembersPrice}</h3>
            <h3>Members €{membersPrice}</h3>
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default PhysicalTherapy;
