import React from "react";
import transformations from "../../fixtures/transformations";

import "./Transformations.scss";

const Transformations = () => {
  return (
    <div className="transfromations-page full-width">
      <div className="transfromations-content">
        <h3>10 Week Transformation Package</h3>
        <h4>
          Our body transformation is an intense program run over 10 weeks (four
          gym sessions per week). These sessions are a combination of strength
          and conditioning and focus on helping build strength, gain muscle and
          in turn loosing body fat.
          <br />
          <br />
          Each client is assessed at the beginning and at the end of the 10
          weeks. Our sessions combined with our nutritional plan will get you
          the results you seek provided you stick to our plan. The results we
          have seen in clients over the 10 weeks speak for themselves{" "}
        </h4>
        <ul>
          <li>Nutritional Plan</li>
          <li>2 fitness tests (Before and After Package)</li>
          <li>2 Styku Body Scans (Before and After Package)</li>
          <li>Pictures (Before and After Package)</li>
          <li>Make new friends</li>
          <li>Have great craic in a fun and safe environment</li>
        </ul>
        <h3 className="tranformations__price">€350</h3>
        {transformations.map((imageUrl) => (
          <img src={process.env.PUBLIC_URL + imageUrl} alt={imageUrl} key={imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default Transformations;
