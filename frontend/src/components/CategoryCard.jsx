import React from "react";
import { Link } from "react-router-dom";

import classes from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  return (
    <div className={classes.main}>
      <Link to={props.linkTo}>
        <div className={classes.image}>
          <img src={props.image} alt={props.header} />
          <div className={classes.info}>
            <p>{props.header}</p>
            <p>view collection</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
