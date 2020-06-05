import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductGrid from '../ProductGrid';
import Filters from '../Filters';
import * as actions from '../store/actions';

const ProductsPage = (props) => {
  const {
    match,
    productItems,
    loading,
    error,
    filters,
    getProducts,
    getFilters
  } = props;
  const { params } = match;

  let categoryId = null;
  if (params.hasOwnProperty('categoryId')) {
    categoryId = params.categoryId;
  }

  useEffect(() => {
    console.log('-------- useEffect of [PRODUCTS PAGE] --------');
    getProducts(categoryId);
    getFilters(categoryId);
  }, [categoryId]);

  return (
    <div>
      <Filters filters={filters} />
      <ProductGrid productItems={productItems} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productItems: state.products.productItems,
    loading: state.products.loading,
    error: state.products.error,
    filters: state.filteringState.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (categoryId) => dispatch(actions.fetchProducts(categoryId)),
    getFilters: (categoryId) => dispatch(actions.fetchFilters(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
