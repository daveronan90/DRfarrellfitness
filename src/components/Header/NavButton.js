import React, { useState } from "react";

import { motion } from "framer-motion";

const NavButton = ({ setToggleNav, toggleNav }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div
      onClick={() => {
        setToggleMenu(!toggleMenu);
        setToggleNav(!toggleNav);
      }}
    >
      <svg width="36" height="36">
        <motion.circle
          animate={toggleMenu ? { opacity: 1 } : { opacity: 0 }}
          cx="18"
          cy="18"
          r="18"
          fill="#434343"
        />
        <motion.rect
          animate={
            toggleMenu
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
            toggleMenu
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
