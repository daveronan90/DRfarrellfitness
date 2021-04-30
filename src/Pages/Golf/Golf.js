import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";

const Golf = () => {
  return (
    <div className="golf-page full-width">
      <MainVideo videoUrl="/trackman.mp4" />
      <div className="golf-content">
        <img src={`${process.env.PUBLIC_URL}/tm1.png`} alt="trackman" />
        <div className="golf-info">
          <h3>Farrell Fitness Golf / Trackman</h3>
          <p>
            TrackMan uses two radar systems instead of one to obtain maximum
            data quality and increased pick up rates. One radar system tracks
            everything the club does before, during, and after impact - from
            commonly known parameters like club path and face angle to swing
            direction and spin loft. The other radar system tracks the full ball
            flight - from launch to landing and everything in between; including
            launch angle, spin rate and curvature. The dual radar technology
            enables even more data to be captured. Due to its focused,
            high-resolution radar beam, the TrackMan launch monitor provides the
            user with the greatest detail and accuracy of the club and ball at
            the moment of impact. The amount of detail achieved in the club
            delivery and ball flight is greatly superior to what is possible
            through single radar technology.
          </p>
          <br />
          <br />
          <p>
            TrackMan uses two radar systems instead of one to obtain maximum
            data quality and increased pick up rates. One radar system tracks
            everything the club does before, during, and after impact - from
            commonly known parameters like club path and face angle to swing
            direction and spin loft. The other radar system tracks the full ball
            flight - from launch to landing and everything in between; including
            launch angle, spin rate and curvature. The dual radar technology
            enables even more data to be captured. Due to its focused,
            high-resolution radar beam, the TrackMan launch monitor provides the
            user with the greatest detail and accuracy of the club and ball at
            the moment of impact. The amount of detail achieved in the club
            delivery and ball flight is greatly superior to what is possible
            through single radar technology.
          </p>
        </div>
      </div>
      <div className="golf-price-table">
        <div>18 HOLES</div>
        <div>TRACKMAN SESSION</div>
        <div>12 WEEK PROGRAMME</div>
        <div>
          60 Minutes €60
          <br />
          90 Minutes €80
        </div>
        <div>Price dependent on duration</div>
        <div>12 Week Golf Specific Programme €600</div>
        <div>
          Yardage Assessment
          <br />
          Trackman Practice
          <br />
          Driving Range
          <br />
          Skills Test
          <br />
          Par 3
        </div>
        <div>4 People Max</div>
        <div>
          TPI Assessment Before & After
          <br />
          10 Trackman Sessions (1Hour)
          <br />
          3D Body Scan (optional)
          <br />
          Nutritional Advice
          <br />
          Mobility Programme
          <br />
          Yardage Assessment
          <br />
          Skills Test
        </div>
      </div>
    </div>
  );
};

export default Golf;
