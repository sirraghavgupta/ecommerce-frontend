import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from '../ProductCard';

import * as productActions from '../store/actions';

import classes from './ProductGrid.module.css';

const ProductGrid = (props) => {
  const { onLoadGetProducts, productItems } = props;

  useEffect(() => {
    console.log('useEffect of Grid.');
    onLoadGetProducts();
  }, [onLoadGetProducts]);

  const productCards = productItems.map((productItem) => (
    <Col key={`${productItem.productId}_${productItem.variationId}`}>
      <ProductCard
        imageUrl={productItem.imageUrl}
        productDetails={productItem}
      />
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

const mapStateToProps = (state) => {
  return {
    productItems: state.products.productItems,
    loading: state.products.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadGetProducts: () => dispatch(productActions.fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);

