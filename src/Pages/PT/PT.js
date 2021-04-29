import React from "react";
import Member from "../../components/Member/Member";

import team from "../../fixtures/team";

import "./PT.scss";

const PT = () => {
  return (
    <div className="PT__page">
      <h1>Personal Training</h1>
      <p>
        Sometimes we need a little help. A gentle push to get us started and to
        motivate us to achieve our dreams. Personal Training here at Farrell
        Fitness can provide you with everything you need to start and then
        continue your fitness journey. We cater for 1 to 1 or semi group
        personal training. So, whether your goal is to run a marathon, grow
        muscle and gain definition, lose weight or maybe just to gain confidence
        to attend classes we are here to help, encourage and motivate you.
      </p>
      <h2>How it works</h2>
      <ul>
        <li>Come in and meet your instructor</li>
        <li>Discuss a plan and set short and long term goals</li>
        <li>Get your 3D Body Composition Scan</li>
        <li>
          We will provide and educate you with a personalised nutrition plan
        </li>
        <li>
          We will then head out to the Gym and teach you all the techniques you
          need to know
        </li>
        <li>
          Once we are confident we will progress to our fitness and mobility
          testing
        </li>
      </ul>
      <h2>Our Team</h2>

      {team.map((member) => (
        <Member {...member} />
      ))}
      <h4>ALL YOU NEED TO DO IS TAKE THE FIRST STEP AND CALL US</h4>
    </div>
  );
};

export default PT;
