import { React } from "react";
import { Row, Col } from "react-bootstrap";

import FetchProducts from "../Hooks/FetchProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = FetchProducts();

  return (
    <Row className="mt-4 p-4">
      <Col xs={0} md={2}>
        sidebar
      </Col>
      <Col xs={12} md={10}>
        <Row>
          {products.map((product) => (
            <Col xs={6} lg={4} xl={3} key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
                id={product._id}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductList;
