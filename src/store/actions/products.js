import axios from 'axios';
import convertProductToVariationsArray from '../../components/Products/ProductGrid/convertProductToVariationsArray';
import * as actionTypes from './actionTypes';

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START
  };
};

export const fetchProductsSuccess = (productItems) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    productItems
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
    error
  };
};

export const fetchProducts = (categoryId) => {
  console.log('inside fetchProducts');
  return (dispatch) => {
    console.log('dispatching fetchProducts start');
    dispatch(fetchProductsStart());

    console.log('dispatching the products request from axios');
    // console.log(accessToken);
    axios
      .get(`http://localhost:8080/customer/products/${categoryId}`)
      .then((response) => {
        console.log('got the response of products');

        console.log(response);
        const productItems = convertProductToVariationsArray(
          response.data.data
        );
        console.log(productItems);
        dispatch(fetchProductsSuccess(productItems));
      })
      .catch((error) => {
        console.log('got an error');
        console.log(error);
        dispatch(fetchProductsFailure(error));
      });
  };
};
