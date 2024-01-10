import React from 'react'
import { motion } from 'framer-motion'

import Rating from './Rating'

import classes from './TestimonialCard.module.css'

const TestimonialCard = (props) => {

  const reviewCutOff = 100
  let review = props.review;
  if(review.length > reviewCutOff){
    review = review.substring(0, reviewCutOff) + '...' 
  }

  let name = props.name
  let indexOfSpace = name.indexOf(' ') 
  let firstName = name.substring(0, indexOfSpace)
  let lastInitial = name.substring(indexOfSpace + 1, indexOfSpace + 2).toUpperCase()
  let fullName = `${firstName} ${lastInitial}.`
  
  return (
    <motion.div className={classes.main} whileHover={{y: -10}}>
        <div className={classes.imageContainer}>
            <img src={props.image} alt={"product"} />
        </div>
        <div className={classes.rating}>
          <Rating rating={props.rating} />
        </div>
        <div className={classes.reviewContainer}>
            <p>{fullName}</p>
            <p>{review}</p>
        </div>
    </motion.div>
  )
}

export default TestimonialCard