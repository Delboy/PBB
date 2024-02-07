import { React } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from "./Backdrop";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const animation = {
    initial: { x: props.rightSide ? "22rem" : "-22rem" },
    animate: {
      x: 0,
      transition: {
        type: "tween",
        ease: [0.645, 0.0045, 0.355, 1],
        duration: 0.5,
      },
    },
    exit: {
      x: props.rightSide ? "22rem" : "-22rem",
      transition: {
        type: "tween",
        ease: [0.645, 0.0045, 0.355, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {props.openStatus && (
        <>
          <Backdrop onClick={props.closeHandler} />
          <motion.div
            className={`${classes.sideNav} ${
              props.rightSide ? classes.rightSide : classes.leftSide
            }`}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className={classes.main}
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <button className={classes.exit} onClick={props.closeHandler}>
                X
              </button>
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
