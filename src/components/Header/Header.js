import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Title } from "./title_white.svg";

import ModalForm from "../ModalForm/ModalForm";

import NavButton from "./NavButton";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
import { NavModalContext } from "../../App";

const Header = () => {
  const { setModalShow, toggleNav, setToggleNav } = useContext(NavModalContext);

  return (
    <motion.header
      animate={
        toggleNav ? { background: "chocolate" } : { background: "rgb(0,0,0)" }
      }
    >
      <Link to="/" onClick={() => setToggleNav(false)}>
        <div className="title-logo">
          <Title />
        </div>
      </Link>
      <NavButton />
      <motion.button
        className="sign-up-button"
        whileHover={{ scale: 1.2 }}
        onClick={() => setModalShow(true)}
      >
        SIGN UP NOW
      </motion.button>
      <NavMenu />
      <ModalForm />
    </motion.header>
  );
};

export default Header;
