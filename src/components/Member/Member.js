import React from "react";
import "./Member.scss";

const Member = ({ title, name, imageUrl, caption }) => {
  return (
    <div className="personel" key={title}>
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt={name} />
      </div>
      <h5>{title}</h5>
      <h5>{name}</h5>
      <p>
        {caption} <span> Read More...</span>
      </p>
    </div>
  );
};

export default Member;
