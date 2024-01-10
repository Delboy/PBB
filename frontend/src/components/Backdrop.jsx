import React from "react";
import { motion } from "framer-motion";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <motion.div
      className={classes.backdrop}
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: .5}}
      
    ></motion.div>
  );
}

export default Backdrop;
