import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/effect-coverflow";

import classes from "./Product3dCarousel.module.css";

import products from "../products";

const Product3dCarousel = () => {
  return (
    <div className={classes.main}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ pauseOnMouseEnter: true }}
        slidesPerView={"auto"}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={classes.swiper}
      >
        {products.map((product) => (
          <SwiperSlide className={classes.swiperSlide} key={product.id}>
            {({ isActive, isNext, isPrev }) => (
              <>
                <div className={`${classes.overlay}`}>
                  <div className={`${classes.overlayBackground} ${classes.flexCenter}`}></div>
                  <div className={`${classes.productInfo} ${classes.flexCenter}`}>
                    <p>{product.name}</p>
                    <p>£{product.price}</p>
                  </div>
                  <Link to={'/shop'} className={`${classes.productLink} ${classes.flexCenter}`}>View Product</Link>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className={
                    isActive
                      ? classes.active
                      : isPrev
                      ? classes.nextInLine
                      : isNext
                      ? classes.nextInLine
                      : classes.unactive
                  }
                />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product3dCarousel;
