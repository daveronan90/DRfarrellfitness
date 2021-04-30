import React from "react";

import Carousel from "../../components/Carousel/Carousel";

import nutritionImgs from "../../fixtures/nutritionImgs";
import shopData from "../../fixtures/shopData";


const Nutrition = () => {
  return (
    <div className="nutrition-page full-width">
      <Carousel carouselItems={nutritionImgs} carouselType="nutrition" />
      <div className="nutrition-list">
        {shopData.map(({ imageUrl, title, price }) => (
          <div className="nutrition-item" key={title}>
            <img src={`${process.env.PUBLIC_URL + imageUrl}`} alt={imageUrl} />
            <p>{title}</p>
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
