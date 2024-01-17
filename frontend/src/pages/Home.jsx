import React from 'react'

import HeroCarousel from '../components/HeroCarousel'
import TestimonialCardSlider from '../components/TestimonialCardSlider'
import AboutUsBox from '../components/AboutUsBox'
import Product3dCarousel from '../components/Product3dCarousel'
import FavouritesSlider from '../components/FavouritesSlider'
import CategoriesLink from '../components/CategoriesLink'
import SiteTestimonialSlider from '../components/SiteTestimonialSlider'

const Home = () => {
  return (
    <>
        <HeroCarousel />
        <TestimonialCardSlider />
        <AboutUsBox />
        <Product3dCarousel />
        <FavouritesSlider />
        <CategoriesLink />
        <SiteTestimonialSlider />
    </>
  )
}

export default Home