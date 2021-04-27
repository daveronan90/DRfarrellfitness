import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ModalForm from "../ModalForm/ModalForm";
import "./Header.scss";

const navItems = ["HOME", "OPEN GYM", "GOLF", "CLASSES", "ABOUT"];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <header>
        <div className="social__media">
          <a href="/">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <span>Follow with us:</span>
          <a href="https://www.facebook.com/farrellfitness17/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/farrellfitness17/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <button onClick={() => setModalShow(true)}>Contact</button>
        </div>
        <div className="burger" onClick={() => setToggleNav(!toggleNav)}>
          <FontAwesomeIcon icon={faBars} className="burger__icon" />
        </div>
      </header>
      <nav>
        {navItems.map((navItem, index) => (
          <CSSTransition
            in={toggleNav}
            unmountOnExit
            timeout={500}
            classNames="menu"
          >
            <Link
              to="/"
              className={`nav__link`}
              onClick={() => setToggleNav(!toggleNav)}
              key={index}
            >
              {navItem}
            </Link>
          </CSSTransition>
        ))}
      </nav>
      <ModalForm modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

export default Header;
