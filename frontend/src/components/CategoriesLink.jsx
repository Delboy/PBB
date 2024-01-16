import React from "react";

import CategoryCard from "./CategoryCard";

import classes from "./CategoriesLink.module.css";

import hero1 from "../assets/images/hero-shoes-1.jpg";

const CategoriesLink = () => {
  return (
    <div className={classes.main}>
      <CategoryCard header="Mens Boots" image={hero1} linkTo={"/shop"} />
      <CategoryCard header="Care" image={hero1} linkTo={"/shop"} />
      <CategoryCard header="Womens Boots" image={hero1} linkTo={"/shop"} />
    </div>
  );
};

export default CategoriesLink;
