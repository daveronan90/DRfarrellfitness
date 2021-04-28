import React from "react";

import "./MainVideo.scss";

const MainVideo = () => {
  return (
    <video autoPlay muted disablePictureInPicture loop>
      <source
        src={`${process.env.PUBLIC_URL}/mainVideo.mp4`}
        type="video/mp4"
      />
    </video>
  );
};

export default MainVideo;
