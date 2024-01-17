import React from 'react'

import classes from './SiteTestimonialCard.module.css'

const SiteTestimonialCard = (props) => {
  return (
    <div className={classes.main}>
        <h5>{`${props.header} by ${props.author}`}</h5>
        
        <p>{props.review}</p>
    </div>
  )
}

export default SiteTestimonialCard