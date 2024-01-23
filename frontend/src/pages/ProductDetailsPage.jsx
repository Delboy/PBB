import React from "react";
import { useParams } from "react-router-dom";

import products from "../products";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {

  const { id: productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <>
      <ProductDetails product={product} />
      <h1>Free Product offer</h1>
      <h1>You may also like</h1>
      <h1>Pair with Care</h1>
      <h1>Recently Veiwed</h1>
      <h1>Reviews</h1>
    </>
  );
};

export default ProductDetailsPage;
