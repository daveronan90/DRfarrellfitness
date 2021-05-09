import React, { useState } from "react";

import { ReactComponent as FFLogo } from "../../assest/FF.svg";

const GymTimetable = () => {
  const [zoomTable, setZoomTable] = useState(false);
  return (
    <div onClick={() => setZoomTable(!zoomTable)}>
      <h3>OPEN GYM TIMETABLE {new Date().getFullYear()}</h3>
      <div className="timetable" style={zoomTable ? {} : {}}>
        <div className="header">MONDAY</div>
        <div className="header">
          <FFLogo />
        </div>
        <div className="header">TUESDAY</div>
        <div className="header">WEDNESDAY</div>
        <div className="header">THURSDAY</div>
        <div className="header">FRIDAY</div>
        <div className="header">SATURDAY</div>
        <div className="header">SUNDAY</div>

        <div className="time">6:30AM<br/>7.50AM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        
        <div className="time">8:00AM<br/>9:20AM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>

        <div className="time">10:30AM<br/>11:50AM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>

        <div className="time">12:00PM<br/>13:20PM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>

        <div className="time">14:30PM<br/>15:50PM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A & B)</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">16:00PM<br/>17:20PM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">18:30PM<br/>19:50PM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">20:00PM<br/>21:20PM</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo">OPEN GYM <br/> (GYM A)</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
      </div>
    </div>
  );
};

export default GymTimetable;
