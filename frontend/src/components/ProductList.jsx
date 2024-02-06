import { React } from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import Loader from "./Loader";
import Message from "./Message";
import ProductCard from "./ProductCard";

const ProductList = () => {
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
        <Row className="mt-4 p-4">
          <Col xs={0} md={2}>
            sidebar
          </Col>
          <Col xs={12} md={10}>
            <Row>
              {products.map((product) => (
                <Col xs={6} lg={4} xl={3}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    id={product._id}
                    key={product._id}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductList;
