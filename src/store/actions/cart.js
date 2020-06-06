import * as actionTypes from './actionTypes';

export const addToCart = (productId, variationId) => {
  return {
    action: actionTypes.ADD_TO_CART,
    productId,
    variationId
  };
};
