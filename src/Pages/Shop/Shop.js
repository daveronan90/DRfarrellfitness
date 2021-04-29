import React from "react";
import merchandise from "../../fixtures/merchandise";

import "./Shop.scss";

const Shop = () => {
  return (
    <div className="merch-page full-width">
      <h3>PLEASE CONTACT THE GYM TO ORDER YOUR MERCHANDISE</h3>
      <div className="merch-list">
        {merchandise.map(({ imageUrl, title, price }) => (
          <div className="merch-item" key={title}>
            <img src={`${process.env.PUBLIC_URL + imageUrl}`} alt={title} />
            <h4>
              {title} {price}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
