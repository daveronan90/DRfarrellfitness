import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

import ServiceCard from "../ServiceCard/ServiceCard";
import PriceCard from "../PriceCard/PriceCard";

const Carousel = ({ carouselItems, carouselType }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div>
      <div className="carousel__container">
        <Slider {...settings}>
          {carouselItems.map((item) => {
            switch (carouselType) {
              case "services":
                return (
                  <ServiceCard
                    {...item}
                    key={Math.floor(Math.random() * 100)}
                  />
                );

              case "priceCards":
                return (
                  <PriceCard {...item} key={Math.floor(Math.random() * 100)} />
                );
              default:
                return null;
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
