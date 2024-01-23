import { React, useState } from "react";

import Rating from "./Rating";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const [qty, setQty] = useState(1);
  const [selection, setSelection] = useState();

  const Product = props.product;

  const qtyHandler = (e) => {
    if (e.target.value > 0) {
      setQty((prevState) => prevState + 1);
    } else {
      setQty((prevState) => prevState - 1);
    }
  };

  const selectionHandler = (e) => {
    setSelection(e);
  };

  return (
    <div className={classes.main}>
      <div className={classes.imageContainer}>
        <img src={Product.image} alt={Product.name} />
      </div>
      <div className={classes.details}>
        <div className={classes.info}>
          <p>
            {Product.category} /{" "}
            {Product.gender === "m"
              ? "male"
              : Product.gender === "f"
              ? "female"
              : "unisex"}
          </p>
          <p>{Product.name}</p>
          <p>£{Product.price}</p>
          <div className={classes.rating}>
            <div>
              <Rating rating={Product.rating} />
            </div>
            <div>({Product.reviewCount})</div>
          </div>
          <p>{Product.description}</p>
        </div>
        <div className={classes.cartForm}>
          <p>{Product.category === "shoes" ? "UK Size:" : null}</p>
          {Product.sizes.length > 1 && (
            <div className={classes.sizes}>
              {Product.sizes.map((size) => (
                <p
                  className={classes.sizeSelection}
                  onClick={selectionHandler.bind("", size)}
                  style={{
                    borderColor: selection === size ? "black" : null,
                    color: selection === size ? "black" : null,
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
            <button value={1} onClick={qtyHandler} disabled={qty === 999}>
              +
            </button>
          </div>

          <button className={classes.cartBtn}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
