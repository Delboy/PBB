import { React } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import Slider from "./Slider";
import Loader from "./Loader";

const Product3dCarousel = () => {

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div> {error?.data?.message || error.error} </div>
      ) : (
        <Slider
          data={products}
          product3d
          autoplay
          effect="coverflow"
          coverflow
          loop={true}
        />
      )}
    </>
  );
};

export default Product3dCarousel;
