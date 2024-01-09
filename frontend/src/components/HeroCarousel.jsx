import { React, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/hero-shoes-1.jpg";
import hero2 from "../assets/images/hero-shoes-2.jpg";
import hero3 from "../assets/images/hero-shoes-3.jpg";
import hero4 from "../assets/images/hero-shoes-4.jpg";

import classes from "./HeroCarousel.module.css";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const heroItems = [
    {
      image: hero1,
      buttonText: "Shop Trainers",
      buttonLink: "#",
    },
    {
      image: hero2,
      buttonText: "Shop Shoes",
      buttonLink: "#",
    },
    {
      image: hero3,
      buttonText: "Shop Womens",
      buttonLink: "#",
    },
    {
      image: hero4,
      buttonText: "Shop Mens",
      buttonLink: "#",
    },
  ];

  const [timer, setTimer] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTimer(timer + 1);
    }, [1000]);
  });

  const resetTimer = () => {
    setTimer(0);
    clearTimeout(timerRef.current);
  };

  const setImage = (value) => {
    resetTimer();
    setIndex(value);
  };

  const nextImage = useCallback(() => {
    resetTimer();

    if (index === heroItems.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }, [index, heroItems.length]);

  useEffect(() => {
    if (timer === 6) {
      nextImage();
    }
  }, [timer, nextImage]);

  const prevImage = () => {
    resetTimer();

    if (index === 0) {
      setIndex(heroItems.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  // Swipe Controls
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className={classes.main}>
      <div className={classes.imgContainer}>
        <AnimatePresence type="crossfade" mode="crossfade">
          <motion.img
            src={heroItems[index].image}
            key={heroItems[index]}
            alt="slides"
            className={classes.img}
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 1 }}
            transition={{
              duration: 2,
              scale: { duration: 1 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextImage();
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage();
              }
            }}
          />
        </AnimatePresence>
      </div>

      {/* Button */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={classes.buttonWrapper}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.25, duration: 0.5 },
          }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <Link to={heroItems[index].buttonLink}>
            <div className={classes.button}>{heroItems[index].buttonText}</div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Page Dots  */}
      <div className={classes.dots}>
        {heroItems.map((dot, dotIndex) => (
          <div
            key={dotIndex}
            className={`${classes.dot} ${
              index === dotIndex ? classes.filled : null
            }`}
            onClick={setImage.bind("", dotIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
