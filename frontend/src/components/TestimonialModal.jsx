import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

import Rating from "./Rating";

import classes from "./TestimonialModal.module.css";

const TestimonialModal = (props) => {
  return (
    <motion.div
      className={classes.modal}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <button onClick={props.onClick} className={classes.exit}>
        {" "}
        x
      </button>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={props.data.image}
          alt={props.data.name}
        />
      </div>
      <div className={classes.details}>
        <div>
          <p>{props.data.name}</p>
          <div>
            <Rating rating={props.data.rating} />
          </div>
          <p>{props.data.review}</p>
        </div>
        <div className={classes.product}>
          <div className={classes.miniImageContainer}>
            <img
              className={classes.image}
              src={props.data.image}
              alt={props.data.productName}
            />
          </div>
          <div className={classes.productDetails}>
            <p>{props.data.productName}</p>
            <Link to="/shop">
              <button className={classes.productLink}>
                <FaShoppingBag className={classes.bag} />
                View Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialModal;
