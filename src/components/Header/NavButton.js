import React, { useContext } from "react";

import { motion } from "framer-motion";
import { NavModalContext } from "../../App";

const NavButton = () => {
  const { toggleNav, setToggleNav } = useContext(NavModalContext);

  return (
    <div
      onClick={() => {
        setToggleNav(!toggleNav);
      }}
    >
      <svg width="36" height="36">
        <motion.circle
          animate={toggleNav ? { opacity: 1 } : { opacity: 0 }}
          cx="18"
          cy="18"
          r="18"
          fill="#434343"
        />
        <motion.rect
          animate={
            toggleNav
              ? { rotate: -45, x: 0, y: 4.5, fill: "rgb(223, 100, 13)" }
              : { rotate: 0, x: 0, y: 0 }
          }
          x="6"
          y="12"
          width="24"
          height="3"
          rx="1.5"
          fill="white"
          stroke="black"
        />
        <motion.rect
          animate={
            toggleNav
              ? { rotate: 45, x: 0, y: -4.5, fill: "rgb(223, 100, 13)" }
              : { rotate: 0, x: 0, y: 0 }
          }
          x="6"
          y="21"
          width="24"
          height="3"
          rx="1.5"
          fill="white"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default NavButton;
