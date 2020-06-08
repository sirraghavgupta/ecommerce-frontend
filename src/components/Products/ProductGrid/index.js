import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from './ProductCard';

import classes from './ProductGrid.module.css';

const ProductGrid = (props) => {
  const { productItems } = props;

  console.log('======= props of GRID ****************', props);

  const productClickHandler = (productId, variationId) => {
    console.log('product id', `${productId} and variation id , ${variationId}`);
    props.history.push(
      `/product?productId=${productId}&variationId=${variationId}`
    );
  };

  const productCards = productItems.map((productItem) => (
    <Col key={`${productItem.productId}_${productItem.variationId}`}>
      <ProductCard productDetails={productItem} clicked={productClickHandler} />
    </Col>
  ));

  return (
    <Container className={classes.ProductGrid}>
      <Row xs={1} sm={2} md={3} lg={4} className={classes.Row}>
        {productCards}
      </Row>
    </Container>
  );
};

export default withRouter(ProductGrid);
