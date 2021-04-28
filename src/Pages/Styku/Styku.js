import React from "react";

import "./Styku.scss";

const Styku = () => {
  return (
    <div className="styku-page">
      <h2>3D Body Scanning at Farrell Fitness</h2>
      <h4>Available to Members and Non-Members</h4>
      <img src={`${process.env.PUBLIC_URL}/styku.png`} alt="styku" />
      <p>
        A revolutionary new way to measure body-fat and overall fitness, helping
        you to set goals and track results
        <br />
        <br />
        Ideal for weight management, athletes, body builders, groups and sports
        clubs.
        <br />
        <br />
        Skyku appointments will take approximately 15-25 minutes and include the
        scan and data evaluation.
        <br />
        <br />A detailed Styku report will be emailed to you and your data will
        remain in the system for comparison with future scans.
      </p>
      <ul>
        <li>Measures Body Fat and Overall Fitness</li>
        <li>3D Visualisations and Reports</li>
        <li>Fast and Accurate Body Measurements</li>
        <li>Precisely Track Progress</li>
      </ul>
      <h3>
        Members
        <br />
        €40
      </h3>
      <h3>
        Non-Members
        <br />
        €50
      </h3>
    </div>
  );
};

export default Styku;
