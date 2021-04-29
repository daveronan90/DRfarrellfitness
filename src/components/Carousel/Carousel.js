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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`carousel__container ${carouselType}`}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => {
          switch (carouselType) {
            case "services":
              return <ServiceCard {...item} key={index} />;
            case "price__cards":
              return <PriceCard {...item} key={index} />;
            case "nutrition":
              return (
                <img
                  src={`${process.env.PUBLIC_URL + item}`}
                  alt={item}
                  key={index}
                />
              );
            default:
              return null;
          }
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
