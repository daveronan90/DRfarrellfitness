import React from "react";

import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <div className="card__info">
          <h3>Classes</h3>
          <p>Strength & Conditioning</p>
        </div>
      </div>
      <div className="card__img">
        <div className="card__info">
          <h3>Gym</h3>
          <p>Open Gym</p>
        </div>
      </div>
      <div className="card__img">
        <div className="card__info">
          <h3>Golf</h3>
          <p>Trackman</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
