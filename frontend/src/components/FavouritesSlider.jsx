import { React, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import Slider from "./Slider";
import Loader from "./Loader";

import classes from "./FavouritesSlider.module.css";

const FavouritesSlider = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const [gender, setGender] = useState("F");
  const [filteredList, setFilteredList] = useState([]);

  const onClickHandler = (e) => {
    setGender(e.target.value);
  };

  const underlineVariant = {
    initial: { width: 0 },
    animate: { width: "100%" },
    exit: { width: 0 },
  };

  const underline = (
    <motion.div
      className={classes.underline}
      variants={underlineVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    ></motion.div>
  );

  useEffect(() => {
    setFilteredList([]);
    if (products) {
      products.forEach((product) => {
        if (product.gender === gender) {
          setFilteredList((prevState) => [...prevState, product]);
        }
      });
    }
  }, [products, gender]);

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h6>Favourites</h6>
        <div className={classes.selector}>
          <div className={classes.btnWrapper}>
            <button value={"F"} onClick={onClickHandler}>
              For Her
            </button>
            <AnimatePresence mode="wait">
              {gender === "F" && underline}
            </AnimatePresence>
          </div>
          <div className={classes.btnWrapper}>
            <button value={"M"} onClick={onClickHandler}>
              For Him
            </button>
            <AnimatePresence mode="wait">
              {gender === "M" && underline}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div> {error?.data?.message || error.error} </div>
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={gender}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              delay: 0.2,
              opacity: { duration: 1 },
              y: { duration: 0.8 },
            }}
          >
            <Slider
              data={filteredList}
              productCard
              controls
              slidesPerViewSm={2}
              slidesPerViewMd={3}
              slidesPerViewLg={4}
              slidesPerViewXl={6}
            />
          </motion.div>
        </AnimatePresence>
      )}

      <div className={classes.collectionLink}>
        <Link to={"/shop"}>
          <button>View Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default FavouritesSlider;
