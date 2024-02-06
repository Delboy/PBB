import React from "react";
import { useSelector } from "react-redux";
import { IoBagOutline } from "react-icons/io5";

import classes from './BagIcon.module.css'

const BagIcon = () => {
  const { bagItems } = useSelector((state) => state.bag);

  if (bagItems.length > 0) {
    return (
      <div className={classes.container}>
        <IoBagOutline />
        <div className={classes.dot}>
        </div>
      </div>
    );
  } else {
    return <IoBagOutline />;
  }
};

export default BagIcon;
