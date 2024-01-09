import React from 'react'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

import classes from './TestimonialCard.module.css'

const TestimonialCard = (props) => {

  const reviewCutOff = 120
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
    <div className={classes.main}>
        <div className={classes.imageContainer}>
            <img src={props.image} alt={"product"} />
        </div>
        <div className={classes.rating}>
          <span>
            { props.rating >= 1 ? <FaStar /> : props.rating >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
          </span>
          <span>
            { props.rating >= 2 ? <FaStar /> : props.rating >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
          </span>
          <span>
            { props.rating >= 3 ? <FaStar /> : props.rating >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
          </span>
          <span>
            { props.rating >= 4 ? <FaStar /> : props.rating >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
          </span>
          <span>
            { props.rating >= 5 ? <FaStar /> : props.rating >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
          </span>
        </div>
        <div className={classes.reviewContainer}>
            <p>{fullName}</p>
            <p>{review}</p>
        </div>
    </div>
  )
}

export default TestimonialCard