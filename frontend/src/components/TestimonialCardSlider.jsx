import { React, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TestimonialModal from "./TestimonialModal";
import Backdrop from "./Backdrop";

import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "./TestimonialCard";

import classes from "./TestimonialCardSlider.module.css";

import hero1 from "../assets/images/hero-shoes-1.jpg";

const TestimonialCardSlider = (props) => {
  const swiperRef = useRef();

  const dummyData = [
    {
      key: 0,
      image: hero1,
      name: "Derek de Goey",
      review: "Lorem ipsum dolor sit amet.",
      rating: 4,
      productName: 'Blue Shoes'
    },
    {
      key: 1,

      image: hero1,
      name: "Lauren Cooper",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
      productName: 'Blue Shoes'
    },
    {
      key: 2,

      image: hero1,
      name: "Oscar Coen",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3.5,
      productName: 'Blue Shoes'
    },
    {
      key: 3,

      image: hero1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 4.5,
      productName: 'Blue Shoes'
    },
    {

      key: 4,

      image: hero1,
      name: "Jane Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 1,
      productName: 'Blue Shoes'
    },
    {
      key: 5,
      image: hero1,
      name: "Warren Landert",
      review:
        "Lorem ipsum dolor sit amet. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 0.5,
      productName: 'Blue Shoes'
    },
  ];

  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);

  const [selectedId, setSelectedId] = useState(null);

  const diabledNextBtnHandler = () => {
    setNextDisabled(true);
  };

  const diabledPrevBtnHandler = () => {
    setPrevDisabled(true);
  };

  const reEnableBtnHandler = () => {
    setNextDisabled(false);
    setPrevDisabled(false);
  };

  return (
    <>
      <div className={classes.main}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onReachEnd={diabledNextBtnHandler}
          onReachBeginning={diabledPrevBtnHandler}
          onFromEdge={reEnableBtnHandler}
          centeredSlidesBounds={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            530: { slidesPerView: 2 },
            822: { slidesPerView: 3 },
            1272: { slidesPerView: 4 },
          }}
          spaceBetween={15}
          modules={Navigation}
          autoHeight
        >
          {dummyData.map((d, index) => (
            <SwiperSlide key={d.key} onClick={() => setSelectedId(index)} style={{paddingTop: "10px"}} >
              <motion.div
                className={classes.cardWrapper}
                layoutId={d.key}
              >
                <TestimonialCard
                  image={d.image}
                  name={d.name}
                  review={d.review}
                  rating={d.rating}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={classes.controls}>
          <button
            onClick={() => swiperRef.current.slidePrev()}
            disabled={prevDisabled}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            disabled={nextDisabled}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

     <AnimatePresence>
        {(selectedId || selectedId === 0) && (
          <>
            <Backdrop />
            <TestimonialModal
              onClick={() => setSelectedId(null)}
              data={dummyData[selectedId]}
            />
          </>
        )}
     </AnimatePresence>
      
    </>
  );
};

export default TestimonialCardSlider;
