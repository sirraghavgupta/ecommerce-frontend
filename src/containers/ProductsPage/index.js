import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductGrid from '../../components/Products/ProductGrid';
import Filters from '../../components/Products/Filters';
import * as actions from '../../store/actions';

const ProductsPage = (props) => {
  const {
    match,
    location,
    productItems,
    filters,
    getProducts,
    getFilters,
    setAuthRedirectPath
  } = props;

  const { pathname, search } = location;
  const { params } = match;

  let categoryId = null;
  if (params.hasOwnProperty('categoryId')) {
    categoryId = params.categoryId;
  }

  useEffect(() => {
    setAuthRedirectPath(`${pathname}${search}`);
    getProducts(categoryId);
    getFilters(categoryId);
  }, [
    setAuthRedirectPath,
    pathname,
    search,
    categoryId,
    getProducts,
    getFilters
  ]);

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
    getFilters: (categoryId) => dispatch(actions.fetchFilters(categoryId)),
    setAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
