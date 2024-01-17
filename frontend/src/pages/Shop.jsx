import React from 'react'

import CategoriesLink from '../components/CategoriesLink'
import ProductList from '../components/ProductList'

const Shop = () => {
  return (
    <>
    <CategoriesLink />
    <ProductList />
    <h1>Recently viewed</h1>
    </>
  )
}

export default Shop