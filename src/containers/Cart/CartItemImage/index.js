import React from 'react';
import classes from './CartItemImage.module.css';

const CartItemImage = (props) => {
  const { imageUrl } = props;

  return (
    <div className={classes.CartItemImage}>
      <img src={imageUrl} alt="" className={classes.Image} />
    </div>
  );
};

export default CartItemImage;
