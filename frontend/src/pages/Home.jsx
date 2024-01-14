import React from 'react'

import HeroCarousel from '../components/HeroCarousel'
import TestimonialCardSlider from '../components/TestimonialCardSlider'
import AboutUsBox from '../components/AboutUsBox'

const Home = () => {
  return (
    <div style={{height: "200vh"}}>
        <HeroCarousel />
        <TestimonialCardSlider />
        <AboutUsBox />
        <h1>Product Carousel</h1>
        <h1>Favourites</h1>
        <h1>Catogories</h1>
        <h1>Simple Testomonies</h1>

    </div>
  )
}

export default Home