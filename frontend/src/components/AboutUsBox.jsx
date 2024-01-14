import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import classes from "./AboutUsBox.module.css";

import hero1 from "../assets/images/hero-shoes-1.jpg";
import hero2 from "../assets/images/hero-shoes-2.jpg";
import hero3 from "../assets/images/hero-shoes-3.jpg";

const AboutUsBox = () => {
  const [index, setIndex] = useState(0);

  const ourStoryDeets = (
    <>
      <p>
        Not so long ago we embarked on a journey with you to offer
        animal-friendly lifestyle products to the world. Our initial focus was
        on the leather-intensive footwear industry. Within a few years, we've
        successfully positioned ourselves as a leading and fashion-forward brand
        within the global vegan community. Our vegan product lines are currently
        available not only from our London headquarters but also throughout the
        U.K, Europe, The Americas, Asia, and Australasia. Over 30,000
        individuals worldwide now walk the Earth in our cruelty-free shoes
        daily. Excitingly, we are now expanding our PBB offerings to include
        personal care products.
      </p>
      <p>
        You can embrace a fantastic lifestyle without causing harm to animals or
        the planet.
      </p>
      <p className={classes.bold}>There's an alternative path – the PBB way.</p>
    </>
  );

  const weBelieveDeets = (
    <>
      <p>
        All our products are crafted without any animal-derived materials, and
        the laborers in our vegan-certified factories are safeguarded by
        employment and safety regulations. We take pride in being a company that
        prioritizes the welfare of both animals and humans.
      </p>
      <p>
        You don't have to identify as a vegan to appreciate our PETA-approved
        vegan items. Whether you're contemplating embracing the vegan movement,
        just starting out, or have been dedicated to a plant-based lifestyle for
        an extended period, our products are tailored for universal wear. By
        donning and endorsing our brand, you contribute to the dissemination of
        the crucial vegan message within your local communities.
      </p>
    </>
  );

  const ourProductDeets = (
    <p>
      Environmental stewardship and sustainability are paramount to us. At
      V.GAN, we adhere to the principle that achieving sustainable development
      and production means fulfilling present needs while safeguarding those of
      the future. Consequently, our commitment is evident in the utilization of
      zero plastic and glue in our recycled packaging, as well as the creation
      of fabrics sourced exclusively from ocean waste. Our vegan leathers,
      distinguished by their superior quality and vegan certification, also
      align with eco-friendly practices.
    </p>
  );

  const data = [
    {
      title: "Our Story",
      header: "The beggining of something special",
      details: ourStoryDeets,
      image: hero1,
    },
    {
      title: "We Believe",
      header: "Our Position",
      details: weBelieveDeets,
      image: hero2,
    },
    {
      title: "Our Product",
      header: "Where we're heading",
      details: ourProductDeets,
      image: hero3,
    },
  ];

  const underLine = (
    <AnimatePresence>
      <motion.div
        className={classes.underLine}
        key={index}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
      ></motion.div>
      ;
    </AnimatePresence>
  );

  const onClickHandler = (e) => {
    setIndex(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.imageContainer}>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={data[index].image}
              className={classes.image}
              src={data[index].image}
              alt={data[index.title]}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -100,
              }}
              transition={{
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1],
              }}
            />
          </AnimatePresence>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.wrapper}>
            <h6>{data[index].title}</h6>
            <h4>{data[index].header}</h4>
            {data[index].details}
          </div>
        </div>
      </div>
      <div className={classes.selectionBar}>
        <ul>
          <li
            onClick={onClickHandler}
            value={0}
            className={`${index === 0 ? classes.active : null}`}
          >
            Our Story
            {index === 0 ? underLine : null}
          </li>
          <li
            onClick={onClickHandler}
            value={1}
            className={`${index === 1 ? classes.active : null}`}
          >
            We Believe
            {index === 1 ? underLine : null}
          </li>
          <li
            onClick={onClickHandler}
            value={2}
            className={`${index === 2 ? classes.active : null}`}
          >
            Our Product
            {index === 2 ? underLine : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsBox;
