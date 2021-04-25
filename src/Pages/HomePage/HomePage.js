import React from "react";
import Card from "../../components/Card/Card";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="hp-container">
      <div className="slogan">
        <h1>
          <span>FITNESS</span> IS HAPPINESS
        </h1>
        <p>Exercise Really Makes You Happier</p>
      </div>
      <Card />
    </div>
  );
};

export default HomePage;
