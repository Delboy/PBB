import React from 'react'

import HeroCarousel from '../components/HeroCarousel'
import TestimonialCardSlider from '../components/TestimonialCardSlider'
import AboutUsBox from '../components/AboutUsBox'
import Product3dCarousel from '../components/Product3dCarousel'

const Home = () => {
  return (
    <div style={{height: "200vh"}}>
        <HeroCarousel />
        <TestimonialCardSlider />
        <AboutUsBox />
        <Product3dCarousel />
        <h1>Favourites</h1>
        <h1>Catogories</h1>
        <h1>Simple Testomonies</h1>

    </div>
  )
}

export default Home