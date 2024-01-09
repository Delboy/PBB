import React from 'react'

import TestimonialCard from './TestimonialCard'

import classes from './TestimonialCardSlider.module.css'

import hero1 from "../assets/images/hero-shoes-1.jpg";


const TestimonialCardSlider = (props) => {

  const dummyData = [
    {
        image: hero1,
        name: "Derek de Goey",
        review: "Lorem ipsum dolor sit amet.",
        rating: 4
    },
    {
        image: hero1,
        name: "Lauren Cooper",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5
    },
    {
        image: hero1,
        name: "Oscar Coen",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 3.5
    },
    {
        image: hero1,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4.5
    },
    {
        image: hero1,
        name: "Jane Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 1
    },
    {
        image: hero1,
        name: "Warren Landert",
        review: "Lorem ipsum dolor sit amet. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 0.5
    },
  ]  

  return (
    <div className={classes.main}>
        {dummyData.map((d) => (
            <TestimonialCard image={d.image} name={d.name} review={d.review} rating={d.rating} />
        ))}
    </div>
  )
}

export default TestimonialCardSlider