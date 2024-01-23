import { React } from "react";

import FetchProducts from "../Hooks/FetchProducts";
import Slider from "./Slider";

const Product3dCarousel = () => {

  const products = FetchProducts()

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
