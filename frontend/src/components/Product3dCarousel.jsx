import { React } from "react";

import Slider from "./Slider";

import products from "../products";

const Product3dCarousel = () => {
  return (
    <Slider
      data={products}
      product3d
      autoplay
      effect="coverflow"
      coverflow
      slidesPerView="auto"
      loop
    />
  );
};

export default Product3dCarousel;
