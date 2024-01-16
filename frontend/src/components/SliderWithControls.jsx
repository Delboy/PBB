import { React, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

import TestimonialModal from "./TestimonialModal";
import TestimonialCard from "./TestimonialCard";
import Backdrop from "./Backdrop";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";

import classes from "./SliderWithControls.module.css";

const SliderWithControls = (props) => {
  const swiperRef = useRef();

  const data = props.data;

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
    <div className={classes.main}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onReachEnd={diabledNextBtnHandler}
        onReachBeginning={diabledPrevBtnHandler}
        onFromEdge={reEnableBtnHandler}
        centeredSlidesBounds={true}
        centerInsufficientSlides
        breakpoints={{
          0: { slidesPerView: props.testimonialCard ? 1 : 2 },
          530: { slidesPerView: props.testimonialCard ? 2 : 3 },
          822: { slidesPerView: props.testimonialCard ? 3 : 4 },
          1272: { slidesPerView: props.testimonialCard ? 4 : 6 },
        }}
        spaceBetween={15}
        modules={Navigation}
        autoHeight
      >
        {data.map((d, index) => (
          <SwiperSlide
            key={index}
            onClick={() => setSelectedId(index)}
            style={{ paddingTop: "10px" }}
          >
            <motion.div className={classes.cardWrapper}>
              {props.testimonialCard && (
                <TestimonialCard
                  image={d.image}
                  name={d.name}
                  review={d.review}
                  rating={d.rating}
                />
              )}
              {props.productCard && (
                <Link to={'/shop'}>
                <ProductCard name={d.name} price={d.price} image={d.image} />
                </Link>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={classes.controls}
        style={{ bottom: props.testimonialCard ? "14rem" : "10rem" }}
      >
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

      {props.testimonialCard && (
        <AnimatePresence>
          {(selectedId || selectedId === 0) && (
            <>
              <Backdrop />
              <TestimonialModal
                onClick={() => setSelectedId(null)}
                data={data[selectedId]}
              />
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default SliderWithControls;
