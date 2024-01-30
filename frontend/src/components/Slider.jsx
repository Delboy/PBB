import { React, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TestimonialModal from "./TestimonialModal";
import TestimonialCard from "./TestimonialCard";
import SiteTestimonialCard from "./SiteTestimonialCard";
import Product3dCard from "./Product3dCard";
import Backdrop from "./Backdrop";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import classes from "./Slider.module.css";

const Slider = (props) => {
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

  let modules = [Navigation];

  if (props.pagination) {
    modules.push(Pagination);
  }
  if (props.autoplay) {
    modules.push(Autoplay);
  }
  if (props.coverflow) {
    modules.push(EffectCoverflow);
  }

  let slidesPerView;
  let breakpoints;

  if (props.slidesPerView) {
    slidesPerView = props.slidesPerView;
    breakpoints = {};
  } else {
    breakpoints = {
      0: { slidesPerView: props.slidesPerViewSm ? props.slidesPerViewSm : 1 },
      530: { slidesPerView: props.slidesPerViewMd ? props.slidesPerViewMd : 2 },
      822: { slidesPerView: props.slidesPerViewLg ? props.slidesPerViewLg : 3 },
      1272: {
        slidesPerView: props.slidesPerViewXl ? props.slidesPerViewXl : 4,
      },
    };
  }

  return (
    <div className={classes.main}>
      <Swiper
        className={props.coverflow ? classes.coverFlowSwiper : null}
        effect={props.effect}
        grabCursor={props.coverflow ? true : false}
        centeredSlides={props.coverflow ? true : false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        loop={props.loop}
        autoplay={props.autoplay ? { pauseOnMouseEnter: true } : null}
        onReachEnd={diabledNextBtnHandler}
        onReachBeginning={diabledPrevBtnHandler}
        onFromEdge={reEnableBtnHandler}
        centeredSlidesBounds={true}
        centerInsufficientSlides
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        spaceBetween={props.product3d ? 0 : 15}
        pagination={{ clickable: true }}
        modules={modules}
        autoHeight
      >
        {data.map((d, index) => (
          <SwiperSlide
            className={props.coverflow ? classes.coverFlowSwiperSlide : null}
            key={index}
            onClick={() => setSelectedId(index)}
            style={{ paddingTop: props.testimonialCard ? "10px" : null }}
          >
            {({ isActive, isNext, isPrev }) => (
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
                  <ProductCard name={d.name} price={d.price} image={d.image} id={d._id} />
                )}
                {props.siteTestimonial && (
                  <SiteTestimonialCard
                    header={d.header}
                    author={d.author}
                    review={d.review}
                  />
                )}
                {props.product3d && (
                  <Product3dCard
                    name={d.name}
                    price={d.price}
                    image={d.image}
                    id={d._id}
                    imageClassName={
                      isActive
                        ? classes.active
                        : isPrev
                        ? classes.nextInLine
                        : isNext
                        ? classes.nextInLine
                        : classes.unactive
                    }
                  />
                )}
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {props.controls && (
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
      )}

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

export default Slider;
