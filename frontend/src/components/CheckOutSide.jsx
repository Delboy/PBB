import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import CheckOutSideItem from "./CheckOutSideItem";

import classes from "./CheckOutSide.module.css";

const CheckOutSide = () => {
  const bag = useSelector((state) => state.bag);
  const { bagItems } = bag;

  return (
    <div className={classes.main}>
      <div className={classes.bagItems}>
        <AnimatePresence>
          {bagItems.length === 0 && (
            <motion.div
              key={"empty"}
              layout
              className={classes.empty}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p>Your bag is empty</p>
            </motion.div>
          )}
        </AnimatePresence>

        {bagItems.length > 0 &&
          bagItems.map((item) => (
            <AnimatePresence key={`${item._id}-${item.size}`}>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckOutSideItem
                  item={item}
                />
              </motion.div>
            </AnimatePresence>
          ))}
      </div>
      <AnimatePresence>
        {bag.bagItems.length !== 0 && (
          <motion.div
            className={classes.checkout}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <button>
              Checkout <div className={classes.dot}></div> £{bag.totalPrice}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckOutSide;
