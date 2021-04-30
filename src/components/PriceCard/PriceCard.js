import React from "react";

const PriceCard = ({
  offerType,
  title,
  costCent,
  costEuro,
  duration,
  info,
  buttonCaption,
}) => {
  return (
    <div className="price__card">
      <div className="price__card__1">
        <h4>
          {offerType} <span>{title}</span>
        </h4>
      </div>
      <div className="price__card__2">
        <div>
          <h1>€{costEuro},</h1>
        </div>
        <div>
          <h2>{costCent}</h2>
          <h3>{duration}</h3>
        </div>
      </div>
      {info.map((item) => (
        <div className="price__card__info" key={item[0]}>
          <p className={item[1] ? "important" : ""}>{item}</p>
        </div>
      ))}
      <div className="price__card__button">
        <button>{buttonCaption}</button>
      </div>
    </div>
  );
};

export default PriceCard;
