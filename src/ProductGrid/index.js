import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from '../ProductCard';

import * as productActions from '../store/actions';

import classes from './ProductGrid.module.css';

const ProductGrid = (props) => {
  const { onLoadGetProducts, productItems } = props;

  console.log('======= props of GRID ****************', props);

  useEffect(() => {
    console.log('useEffect of Grid.');
    onLoadGetProducts();
  }, [onLoadGetProducts]);

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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductGrid)
);
