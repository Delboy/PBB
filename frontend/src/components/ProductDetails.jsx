import { React, useEffect, useState } from "react";
import { addToBag } from "../slices/bagSlice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Rating from "./Rating";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const { bagItems } = useSelector((state) => state.bag);

  const product = props.product;

  const [qty, setQty] = useState(1);
  const [sizeSelection, setSizeSelection] = useState(
    product.sizes ? product.sizes[0] : null
  );

  const [disableIncrease, setDisableIncrease] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const index = bagItems.findIndex(
      (x) => x._id === product._id && x.size === sizeSelection
    );

    if (index !== -1) {
      const qtyInBag = bagItems[index].qty;
      if (qty + qtyInBag >= product.countInStock) {
        setDisableIncrease(true);
      } else {
        setDisableIncrease(false);
      }
    } else if (product.countInStock === qty) {
      setDisableIncrease(true);
    } else {
      setDisableIncrease(false);
    }
  }, [bagItems, product._id, product.countInStock, qty, sizeSelection]);

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
    dispatch(addToBag({ ...product, qty, size: sizeSelection }));
    setQty(1);
    // open cart drawer
  };

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
            <button value={1} onClick={qtyHandler} disabled={disableIncrease}>
              +
            </button>
          </div>

          <button
            className={classes.cartBtn}
            type="button"
            onClick={addToBagHandler}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
