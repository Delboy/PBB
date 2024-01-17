import React from "react";

import { Link } from 'react-router-dom'

import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={classes.main}>
      <Link to={`/product/${props.id}`}>
        <div className={classes.imageWrapper}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.productInfo}>
          <p>{props.name}</p>
          <p>£{props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
