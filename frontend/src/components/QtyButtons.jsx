import React from 'react'

import classes from './QtyButton.module.css'

const QtyButtons = (props) => {
  return (
    <div className={`${classes.qtyBtn} ${props.small ? classes.small : null}`}>
    <button value={-1} onClick={props.onClick} disabled={props.disableMinus}>
      -
    </button>
    <p>{props.qty}</p>
    <button value={1} onClick={props.onClick} disabled={props.disablePlus}>
      +
    </button>
  </div>
  )
}

export default QtyButtons