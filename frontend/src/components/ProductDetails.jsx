import { React, useState } from "react";
import { addToBag } from '../slices/bagSlice.js'
import { useDispatch } from 'react-redux'

import Rating from "./Rating";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const product = props.product;

  const [qty, setQty] = useState(1);
  const [sizeSelection, setSizeSelection] = useState(product.sizes ? product.sizes[0] : null);

  const dispatch = useDispatch();

  const qtyHandler = (e) => {
    if (e.target.value > 0) {
      setQty((prevState) => prevState + 1);
    } else {
      setQty((prevState) => prevState - 1);
    }
  };

  const selectionHandler = (e) => {
    setSizeSelection(e);
  };

  const addToBagHandler = () => {
     dispatch(addToBag({...product, qty, size: sizeSelection}))
    // open cart drawer
    }

  return (
    <div className={classes.main}>
      <div className={classes.imageContainer}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={classes.details}>
        <div className={classes.info}>
          <p>
            {product.category} /{" "}
            {product.gender === "m"
              ? "male"
              : product.gender === "f"
              ? "female"
              : "unisex"}
          </p>
          <p>{product.name}</p>
          <p>£{product.price}</p>
          <div className={classes.rating}>
            <div>
              <Rating rating={product.rating} />
            </div>
            <div>({product.numReviews})</div>
          </div>
          <p>{product.description}</p>
        </div>
        <div className={classes.cartForm}>
          <p>{product.category === "shoes" ? "UK Size:" : null}</p>
          {product.sizes && (
            <div className={classes.sizes}>
              {product.sizes.map((size) => (
                <p
                  key={size}
                  className={classes.sizeSelection}
                  onClick={selectionHandler.bind("", size)}
                  style={{
                    borderColor: sizeSelection === size ? "black" : null,
                    color: sizeSelection === size ? "black" : null,
                  }}
                >
                  {size}
                </p>
              ))}
            </div>
          )}
          <div className={classes.qtyBtn}>
            <button value={-1} onClick={qtyHandler} disabled={qty === 1}>
              -
            </button>
            <p>{qty}</p>
            <button value={1} onClick={qtyHandler} disabled={qty === product.countInStock}>
              +
            </button>
          </div>

          <button className={classes.cartBtn} type='button' onClick={addToBagHandler}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
