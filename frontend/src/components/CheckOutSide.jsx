import React from 'react';

import { useSelector } from 'react-redux'

import CheckOutSideItem from './CheckOutSideItem';

import classes from './CheckOutSide.module.css'

const CheckOutSide = () => {
  const bag = useSelector((state) => state.bag);
  const { bagItems } = bag;

  return (
    <div className={classes.main}>
      <div className={classes.bagItems}>
        {bagItems.length === 0 ? (
          <div className={classes.empty}>
          <p>Your bag is empty</p>
          </div>
        ) : (
          <>
          {bagItems.map(item => (
            <CheckOutSideItem item={item} key={`${item._id}-${item.size}`} />
          ))}
          </>
        )}
      </div>
      {bag.totalPrice && 
      <div className={classes.checkout}>
        <button>Checkout <div className={classes.dot}></div> £{bag.totalPrice}</button>
      </div>
      }
    </div>
  )
}

export default CheckOutSide