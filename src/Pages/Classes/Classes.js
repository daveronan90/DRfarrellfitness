import React from "react";
import ClassesTimetable from "../../components/ClassesTimetable/ClassesTimetable";
import MainVideo from "../../components/MainVideo/MainVideo";

const Classes = () => {
  return (
    <div className="classes-page full-width">
      <MainVideo videoUrl="/classesVideo.mp4" />
      <div className="classes-content">
        <ClassesTimetable />

        <h1>Strength and Conditioning</h1>
        <p>
          These classes involve a wide range of exercises developed to build a
          variety of skills with a focus on mind, mobility, stability, strength,
          endurance, power, speed, agility and performance. Here at Farrell
          Fitness you will learn how to perform an exercise correctly and most
          importantly learn why you perform exercises the way you do. You will
          not only increase your strength and confidence but you will also
          improve your body composition. You will look leaner and become
          stronger.
        </p>
        <p>
          Our classes are suitable for all levels and are tailored to suit your
          individual needs.
        </p>
        <p>What can you expect from our Strength & Conditioning classes?</p>
        <p>You can expect to:</p>
        <div className="list">
          <li>Become stronger, leaner and fitter</li>
          <li>Get personal attention and advice</li>
          <li>Learn correct technique</li>
          <li>Build lean muscle</li>
          <li>Gain confidence</li>
        </div>

        <h1>Strength</h1>
        <p>
          The focus in these classes is build technique and physical strength.
          Here at Farrell Fitness you will learn how to perform an exercise
          correctly and most importantly learn why you perform exercises the way
          you do. Our classes are suitable for all levels and are tailored to
          suit your individual needs.
        </p>
        <p>What to expect from our Strength classes?</p>
        <p>You can expect to:</p>
        <div className="list">
          <li>Learn correct techniques</li>
          <li>Improve your mobility</li>
          <li>Learn compound lifts</li>
          <li>Learn Olympic lifts</li>
          <li>Build muscle</li>
          <li>Get strong</li>
          <li>Meet new people</li>
          <li>Have fun in a safe environment</li>
        </div>
      </div>
    </div>
  );
};

export default Classes;
