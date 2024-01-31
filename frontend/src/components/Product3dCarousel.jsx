import { React } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import Slider from "./Slider";
import Loader from "./Loader";
import Message from "./Message";
const Product3dCarousel = () => {

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
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
