import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as Title } from "./title_white.svg";

import ModalForm from "../ModalForm/ModalForm";

import services from "../../fixtures/services";
import NavButton from "./NavButton";

const Header = ({ toggleNav, setToggleNav }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <header>
      <Link to="/" onClick={() => setToggleNav(false)}>
        <div className="title-logo">
          <Title />
        </div>
      </Link>
      <NavButton setToggleNav={setToggleNav} toggleNav={toggleNav} />
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
