import React from "react";

const MainVideo = ({ videoUrl }) => {
  return (
    <video autoPlay muted disablePictureInPicture playsInline loop>
      <source src={`${process.env.PUBLIC_URL + videoUrl}`} type="video/mp4" />
    </video>
  );
};

export default MainVideo;
