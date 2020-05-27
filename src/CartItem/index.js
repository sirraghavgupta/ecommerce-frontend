import React, { useState } from 'react';
import CartItemImage from '../CartItemImage';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { product, variationIndex } = props;
  const { primaryImage } = product.variations[0];

  const [quantityState, setQuantityState] = useState(
    product.variations[variationIndex].quantityAvailable
  );

  const productAttributes = {
    name: product.productDto.name,
    brand: product.productDto.brand,
    price: product.variations[variationIndex].price,
    ...product.variations[variationIndex].attributes
  };

  const quantityChangeListener = () => {
    console.log('clicked');
    setQuantityState((prevState) => prevState + 1);
  };

  let attributeElements = Object.keys(productAttributes).map((key) => (
    <tr>
      <td className={classes.Label}>{key}</td>
      <td>:</td>
      <td className={classes.Value}>{productAttributes[key]}</td>
    </tr>
  ));

  attributeElements = attributeElements.concat(
    <tr>
      <td className={classes.Label}>Quantity</td>
      <td>:</td>
      <input
        type="number"
        className={classes.Quantity}
        value={quantityState}
        onChange={quantityChangeListener}
      />
    </tr>
  );

  return (
    <div className={classes.CartItem}>
      <CartItemImage imageUrl={primaryImage} />
      <div className={classes.Details}>{attributeElements}</div>
    </div>
  );
};

export default CartItem;
