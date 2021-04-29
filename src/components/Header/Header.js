import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import ModalForm from "../ModalForm/ModalForm";

import services from "../../fixtures/services";

import "./Header.scss";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <header>
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/title-img2.png`} alt="title" />
      </Link>
      <div className="burger" onClick={() => setToggleNav(!toggleNav)}>
        <FontAwesomeIcon icon={faBars} className="burger__icon" />
      </div>
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
