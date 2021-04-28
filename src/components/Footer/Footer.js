import React from "react";

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__media">
        <a href="https://www.facebook.com/farrellfitness17/">
          <FontAwesomeIcon icon={faFacebookF} className="facebook" />
        </a>
        <a href="https://www.instagram.com/farrellfitness17/">
          <FontAwesomeIcon icon={faInstagram} className="instgram" />
        </a>
      </div>
      <h5>Find Us Here</h5>
      <div className="footer__address">
        <h4>27 Woodbine Business Park, New Ross, Co. Wexford</h4>
        <h5>Website designed by David Ronan</h5>
      </div>
    </footer>
  );
};

export default Footer;
