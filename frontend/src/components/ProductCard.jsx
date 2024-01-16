import React from "react";

import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.imageWrapper}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.productInfo}>
        <p>{props.name}</p>
        <p>£{props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
