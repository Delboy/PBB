import { React } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import Slider from "./Slider";

const Product3dCarousel = () => {

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>loading</h2>
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
