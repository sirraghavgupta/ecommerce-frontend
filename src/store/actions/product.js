import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchProductStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_START
  };
};

export const fetchProductSuccess = (product, variationId) => {
  return {
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    product,
    variationId
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAILED,
    error
  };
};

export const fetchProduct = (productId, variationId) => {
  console.log('inside fetchProduct');
  return (dispatch) => {
    console.log('dispatching fetchProduct start');
    dispatch(fetchProductStart());

    console.log('dispatching the product request from axios');
    axios
      .get(`http://localhost:8080/customer/product/${productId}`)
      .then((response) => {
        console.log('got the response of product');

        console.log(response);
        dispatch(fetchProductSuccess(response.data.data, variationId));
      })
      .catch((error) => {
        console.log('got an error');
        console.log(error);
        dispatch(fetchProductFailure(error));
      });
  };
};
