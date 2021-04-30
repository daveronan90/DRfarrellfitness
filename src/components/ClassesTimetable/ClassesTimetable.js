import React, { useState } from "react";

const ClassesTimetable = () => {
  const [zoomTable, setZoomTable] = useState(false);
  return (
    <div onClick={() => setZoomTable(!zoomTable)}>
    <h3>CLASSES TIMETABLE {new Date().getFullYear()}</h3>
      <div className="table" style={zoomTable ? {} : {}}>
        <div className="header">MONDAY</div>
        <div className="header">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/FFfeathered.png`}
            alt="FF"
          />
        </div>
        <div className="header">TUESDAY</div>
        <div className="header">WEDNESDAY</div>
        <div className="header">THURSDAY</div>
        <div className="header">FRIDAY</div>
        <div className="header">SATURDAY</div>
        <div className="header">SUNDAY</div>

        <div className="time">7:00AM</div>
        <div className="classInfo"></div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">9:30AM</div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>

        <div className="time">10:45AM</div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo">STRENGTH</div>
        <div className="classInfo">STRENGTH</div>

        <div className="time">4:15PM</div>
        <div className="classInfo"></div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">5:30PM</div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">STRENGTH</div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">STRENGTH</div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">6:45PM</div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>

        <div className="time">8:00PM</div>
        <div className="classInfo"></div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo">
          STRENGTH <br /> CONDITIONING
        </div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
        <div className="classInfo"></div>
      </div>
    </div>
  );
};

export default ClassesTimetable;
