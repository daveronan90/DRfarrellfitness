import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as Title } from "./title_white.svg";

import ModalForm from "../ModalForm/ModalForm";

import services from "../../fixtures/services";
import { motion } from "framer-motion";

const Header = ({ toggleNav, setToggleNav }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <header>
      <Link to="/" onClick={() => setToggleNav(false)}>
        <div className="title-logo">
         <Title/>
        </div>
      </Link>
      <motion.div
        whileHover={{ color: "rgb(223, 100, 13)" }}
        className="burger"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <FontAwesomeIcon icon={faBars} className="burger__icon" />
      </motion.div>
      <button className="sign-up-button" onClick={() => setModalShow(true)}>
        SIGN UP NOW
      </button>
      <nav>
        {services.map(({ title, routeUrl }, index) => (
          <CSSTransition
            in={toggleNav}
            unmountOnExit
            timeout={500}
            classNames="menu"
            key={`${index}`}
          >
            <Link
              to={routeUrl}
              className={`nav__link`}
              onClick={() => setToggleNav(!toggleNav)}
            >
              {title}
            </Link>
          </CSSTransition>
        ))}
      </nav>
      <ModalForm modalShow={modalShow} setModalShow={setModalShow} />
    </header>
  );
};

export default Header;
