import React from "react";
import "./HomePage.scss";
import MainVideo from '../../components/MainVideo/MainVideo'
import services from "../../fixtures/services";
import priceCards from "../../fixtures/priceCards";

import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div className="home-page full-width">
      <MainVideo videoUrl="/mainVideo.mp4" />
      <Carousel carouselItems={services} carouselType="services" />
      <Carousel carouselItems={priceCards} carouselType="price__cards" />
    </div>
  );
};

export default HomePage;
