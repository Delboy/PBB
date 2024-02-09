import React from "react";
import { adjustItemQty } from "../slices/bagSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import QtyButtons from "../components/QtyButtons";

import classes from "./CheckOutSideItem.module.css";
const CheckOutSideItem = (props) => {
  const dispatch = useDispatch();

  const product = props.item;

  const qtyHandler = (e) => {
    const amount = Number(e.target.value);
    dispatch(adjustItemQty({ product, amount }));
  };

  return (
    <div className={classes.main}>
      <Link to={`/product/${product._id}`}>
        <div className={classes.imgContainer}>
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className={classes.details}>
        <Link to={`/product/${product._id}`}>
          <p>{product.name}</p>
        </Link>
        {product.size && <p>size: {product.size}</p>}
        <p>£{product.price}</p>
        <div className={classes.buttons}>
          <QtyButtons
            small
            qty={product.qty}
            onClick={qtyHandler}
            disableMinus={product.qty === 1}
            disablePlus={product.qty === product.countInStock}
          />

          <button>remove</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutSideItem;
