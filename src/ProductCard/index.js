import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
  const { productDetails, clicked } = props;

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
      {/* <Card.Img variant="top" src={imageUrl} /> */}
      <Card.Body>
        <Card.Title>{productDetails.name}</Card.Title>
        <Card.Subtitle>Brand - {productDetails.brand}</Card.Subtitle>
        <Card.Text>
          <p>Price - {`Rs.${productDetails.price}`}</p>
        </Card.Text>
        <Card.Text>
          <p>Size - {productDetails.size}</p>
        </Card.Text>

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
