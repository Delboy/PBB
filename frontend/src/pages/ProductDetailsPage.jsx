import { React } from "react";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {

  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <ProductDetails product={product} />
      )}
      <h1>Free Product offer</h1>
      <h1>You may also like</h1>
      <h1>Pair with Care</h1>
      <h1>Recently Veiwed</h1>
      <h1>Reviews</h1>
    </>
  );
};

export default ProductDetailsPage;
