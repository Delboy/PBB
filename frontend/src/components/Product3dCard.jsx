import React from "react";
import { Link } from 'react-router-dom'

import classes from './Product3dCard.module.css'

const Product3dCard = (props) => {
  return (
    <>
      <div className={`${classes.overlay}`}>
        <div
          className={`${classes.overlayBackground} ${classes.flexCenter}`}
        ></div>
        <div className={`${classes.productInfo} ${classes.flexCenter}`}>
          <p>{props.name}</p>
          <p>£{props.price}</p>
        </div>
        <Link
          to={"/shop"}
          className={`${classes.productLink} ${classes.flexCenter}`}
        >
          View Product
        </Link>
      </div>
      <img
        src={props.image}
        alt={props.name}
        className={props.imageClassName}
      />
    </>
  );
};

export default Product3dCard;
