import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
  const { imageUrl, productDetails } = props;

  return (
    <Card className={classes.ProductCard}>
      <div className={classes.Image}>
        <img src={imageUrl} alt="product" />
      </div>
      {/* <Card.Img variant="top" src={imageUrl} /> */}
      <Card.Body>
        <Card.Title>{productDetails.name}</Card.Title>
        <Card.Subtitle>Brand - {productDetails.brand}</Card.Subtitle>
        {/* <Card.Body> */}
        <Card.Text>
          <p>Price - {`Rs.${productDetails.price}`}</p>
        </Card.Text>
        <Card.Text>
          <p>Size - {productDetails.size}</p>
        </Card.Text>
        {/* </Card.Body> */}

        {/* <ButtonGroup> */}
        <Button variant="primary" className={classes.Button}>
          Buy now
        </Button>
        <Button variant="primary" className={classes.Button}>
          Add to cart
        </Button>
        {/* </ButtonGroup> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
