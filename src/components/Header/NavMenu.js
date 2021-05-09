import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavModalContext } from "../../App";
import services from "../../fixtures/services";

const NavMenu = () => {
  const { toggleNav, setToggleNav } = useContext(NavModalContext);

  return (
    <motion.nav>
      {services.map(({ title, routeUrl }, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={
            toggleNav
              ? {
                  scale: 1,
                  height: "auto",
                  padding: "0.5rem 0",
                  transition: { ease: "easeInOut" },
                }
              : {
                  scale: 0,
                  height: 0,
                  padding: "0",
                  transition: { ease: "easeInOut" },
                }
          }
          className={`nav-link`}
        >
          <Link to={routeUrl} onClick={() => setToggleNav(!toggleNav)}>
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.07 } }}
            >
              {title}
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default NavMenu;
