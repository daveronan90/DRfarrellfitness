import { motion } from "framer-motion";
import React, { useContext } from "react";

import { NavModalContext } from "../../App";

const PriceCard = ({
  offerType,
  title,
  costCent,
  costEuro,
  duration,
  info,
  buttonCaption,
}) => {
  const { modalShow, setModalShow } = useContext(NavModalContext);

  return (
    <div className="price__card">
      <div className="price__card__1">
        <h4>
          {offerType} <span>{title}</span>
        </h4>
      </div>
      <div className="price__card__2">
        <div>
          <h1>€{costEuro},</h1>
        </div>
        <div>
          <h2>{costCent}</h2>
          <h3>{duration}</h3>
        </div>
      </div>
      {info.map((item) => (
        <div className="price__card__info" key={item[0]}>
          <motion.p
            animate={
              item[1]
                ? {
                    scale: [1, 1.2, 1],
                    transition: { repeat: Infinity },
                  }
                : {}
            }
          >
            {item}
          </motion.p>
        </div>
      ))}
      <div className="price__card__button">
        <button onClick={() => setModalShow(!modalShow)}>
          {buttonCaption}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
