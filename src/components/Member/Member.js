import React from "react";
import "./Member.scss";

const Member = ({ title, name, imageUrl, caption }) => {
  return (
    <div className="personel">
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt={name} />
      </div>
      <h5>{title}</h5>
      <h5>{name}</h5>
      <p>
        Hi, and a warm welcome to Farrell Fitness. Personally I love meeting
        people and connecting with them on a personal level. I try to gain as
        much experience and knowledge from everyone I meet.{" "}
        <span> Read More...</span>
      </p>
    </div>
  );
};

export default Member;
