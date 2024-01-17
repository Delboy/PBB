import React from 'react'
import { Row, Col } from 'react-bootstrap'

import products from '../products'

import ProductCard from './ProductCard'

import hero1 from "../assets/images/hero-shoes-1.jpg";

const ProductList = () => {
  return (
    <Row className='mt-4 p-4'>
        <Col xs={0} md={2}>sidebar</Col>
        <Col xs={12} md={10}>
            <Row>
                {products.map((product) => (
                    <Col xs={6} lg={4} xl={3}>
                        <ProductCard name={product.name} price={product.price} image={hero1} id={product.id} />
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
  )
}

export default ProductList