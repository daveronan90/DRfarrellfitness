import React from "react";
import "./HomePage.scss";

import services from "../../fixtures/services";
import priceCards from "../../fixtures/priceCards";

import Carousel from "../../components/Carousel/Carousel";
import MainVideo from "../../components/MainVideo/MainVideo";

const HomePage = () => {
  return (
    <div className="hp-container">
      <MainVideo />
      <Carousel carouselItems={services} carouselType="services" />
      <Carousel carouselItems={priceCards} carouselType="price__cards" />
    </div>
  );
};

export default HomePage;
