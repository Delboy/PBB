import { React } from "react";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useParams } from "react-router-dom";
// import axios from "axios";

import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  // const [product, setProduct] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${productId}`);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  //   setIsLoading(false)
  // }, [productId]);

  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  return (
    <>
      {isLoading ? (
        <h2>loading</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error} </div>
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
