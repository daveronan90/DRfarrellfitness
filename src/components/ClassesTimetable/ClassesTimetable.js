import React, { useState } from "react";

import { ReactComponent as FFLogo } from "../../assest/FF.svg";

const ClassesTimetable = () => {
  const [zoomTable, setZoomTable] = useState(false);
  return (
    <div onClick={() => setZoomTable(!zoomTable)}>
      <h3>CLASSES TIMETABLE {new Date().getFullYear()}</h3>
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

        <div className="time">6:45AM<br/>7.45AM</div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        
        <div className="time">7:00AM<br/>8:00AM</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">9:30AM<br/>10:30AM</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>

        <div className="time">16:15PM<br/>17:15PM</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">17:30PM<br/>18:30PM</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo">UPPER BODY<br/>STRENGTH</div>
        <div className="classInfo">BEGINNER</div>
        <div className="classInfo">LOWER BODY<br/>STRENGTH</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">18:45PM<br/>19:45PM</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">20:00PM<br/>21:00PM</div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH<br/>CONDITIONING</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
      </div>
    </div>
  );
};

export default ClassesTimetable;
