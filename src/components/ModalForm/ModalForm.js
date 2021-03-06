import React, { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { NavModalContext } from "../../App";

import emailjs from "emailjs-com";

const ModalForm = () => {
  const { modalShow, setModalShow } = useContext(NavModalContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        "service_96179bg",
        "template_yzej7hf",
        templateParams,
        "user_CvNDBwrqvJvmrZ8szGIjh"
      )
      .then(
        (result) => {
          alert("Thanks for signing up!");
        },
        (error) => alert("Something went wrong, please try again later")
      );

    setModalShow(false);

    setUserInfo({ name: "", email: "", phone: "", message: "" });
  };

  const { name, phone, email, message } = userInfo;

  return (
    <CSSTransition
      timeout={500}
      unmountOnExit
      in={modalShow}
      classNames="modal"
    >
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <h3>
            Sign Up<div onClick={() => setModalShow(false)}>X</div>
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="form__item"
            value={name}
            onChange={handleChange}
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            className="form__item"
            value={email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="phone"
            placeholder="Phone No."
            className="form__item"
            value={phone}
            onChange={handleChange}
            name="phone"
          />
          <textarea
            cols="30"
            rows="3"
            placeholder="Message"
            className="form__item"
            value={message}
            onChange={handleChange}
            name="message"
          />
          <button type="submit" className="form__item">
            Sign Up
          </button>
        </form>
      </div>
    </CSSTransition>
  );
};

export default ModalForm;
