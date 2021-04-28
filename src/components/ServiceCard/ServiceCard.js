import React from "react";
import { Link } from "react-router-dom";

import "./ServiceCard.scss";

const ServiceCard = ({ routeUrl, title, imageUrl }) => {
  return (
    <div className="service__card">
      <Link to={routeUrl}>
        <h3>{title}</h3>
        <img
          src={`${process.env.PUBLIC_URL}/${imageUrl}`}
          alt={title}
          width="100%"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
