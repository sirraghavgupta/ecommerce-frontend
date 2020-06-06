import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
  const { productDetails, clicked } = props;

  const productAttributes = Object.keys(productDetails.attributes).map(
    (propertyName) => (
      <Card.Text>
        <p className={classes.PropName}>
          {propertyName} - {productDetails.attributes[propertyName]}
        </p>
      </Card.Text>
    )
  );

  return (
    <Card
      className={classes.ProductCard}
      onClick={() => {
        clicked(productDetails.productId, productDetails.variationId);
      }}
    >
      <div className={classes.Image}>
        <img src={productDetails.primaryImage} alt="product" />
      </div>
      <Card.Body>
        <Card.Title>{productDetails.name}</Card.Title>
        <Card.Subtitle>Brand - {productDetails.brand}</Card.Subtitle>

        {productAttributes}

        <Button variant="primary" className={classes.Button}>
          Buy now
        </Button>
        <Button variant="primary" className={classes.Button}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
