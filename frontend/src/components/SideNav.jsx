import React from "react";
import { motion } from "framer-motion";

import List from "./List";

import classes from "./SideNav.module.css";

const SideNav = (props) => {
  const subList = [
    {
      title: "Contact Us",
      linkTo: "#",
    },
    {
      title: "Account",
      linkTo: "#",
    },
  ];

  const animation = {
    initial: { x: "-22rem" },
    animate: {
      x: 0,
      transition: {
        type: "tween",
        ease: [0.645, 0.0045, 0.355, 1],
        duration: 0.5,
      },
    },
    exit: {
      x: "-22rem",
      transition: {
        type: "tween",
        ease: [0.645, 0.0045, 0.355, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={classes.sideNav}
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
        <button className={classes.exit} onClick={props.onClick}>
          X
        </button>
        <nav className={classes.mainNav}>
          <List listItems={props.listItems} divider />
        </nav>
        <nav className={classes.subNav}>
          <List listItems={subList} small />
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default SideNav;
