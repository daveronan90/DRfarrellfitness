import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img
        src={`${process.env.PUBLIC_URL}/title-img.png`}
        alt="titleImage"
        className="logo"
      />
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">GYM</Link>
          </li>
          <li>
            <Link to="/">GOLF</Link>
          </li>
          <li>
            <Link to="/">CLASSES</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
        </ul>
      </nav>
      <button>Contact</button>
    </header>
  );
};

export default Header;
