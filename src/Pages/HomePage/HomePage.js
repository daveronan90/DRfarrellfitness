import React from "react";
import "./HomePage.scss";

import services from "../../fixtures/services";
import priceCards from "../../fixtures/priceCards";

import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div className="hp-container">
      <Carousel carouselItems={services} carouselType="services" />
      <Carousel carouselItems={priceCards} carouselType="priceCards"/>
    </div>
  );
};

export default HomePage;
