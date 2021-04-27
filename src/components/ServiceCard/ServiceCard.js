import React from "react";
import { Link } from "react-router-dom";

import "./ServiceCard.scss";

const ServiceCard = ({ routeUrl, id, title, imageUrl }) => {
  return (
    <div className="service__card" >
      <Link to={routeUrl}>
        <img
          src={`${process.env.PUBLIC_URL}/${imageUrl}`}
          alt={title}
          width="100%"
        />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default ServiceCard;
