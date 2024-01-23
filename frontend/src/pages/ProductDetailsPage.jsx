import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: productId } = useParams();
  
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
      console.log(data);
    };

    fetchProduct();
    setIsLoading(false)
    // console.log(product);
  }, [productId]);

  // const product = products.find((p) => p.id === productId);

  return (
    <>
      {isLoading && <p>loading</p>}

      {!isLoading && (
        <>
          <ProductDetails product={product} />
          {/* {product.name} */}
          <h1>Free Product offer</h1>
          <h1>You may also like</h1>
          <h1>Pair with Care</h1>
          <h1>Recently Veiwed</h1>
          <h1>Reviews</h1>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
