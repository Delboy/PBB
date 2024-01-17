import React from 'react'

import classes from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={classes.main}>
        <p>Sign up to our Newsletter to keep up to date with our latest products and offers!</p>
        <form>
            <input></input>
            <button type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter