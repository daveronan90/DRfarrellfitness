import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Member = ({
  title,
  name,
  imageUrl,
  caption,
  teamDesc,
  qualifications,
}) => {
  const [showMemberModal, setShowMemberModal] = useState(false);
  return (
    <div className="personel" key={title}>
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt={name} />
      </div>
      <h3>{title}</h3>
      <h3>{name}</h3>
      <p>
        {caption}{" "}
        <span onClick={() => setShowMemberModal(true)}> Read More...</span>
      </p>
      <CSSTransition
        in={showMemberModal}
        unmountOnExit
        classNames="member-bio"
        timeout={300}
      >
        <div className="member-modal" onClick={() => setShowMemberModal(false)}>
          <div className="member-info">
            <h3 style={{ textAlign: "left", color: "black" }}>{title}</h3>
            <h2>{name}</h2>
            <div className="member-desc">{teamDesc}</div>
            <br />
            <div>Academic Qualifications:</div>
            <br />
            <div className="list">
              {qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </div>
          </div>
          <div
            className="member-img"
            style={{
              background: `url(${
                process.env.PUBLIC_URL + imageUrl
              }) no-repeat center / cover`,
            }}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Member;
