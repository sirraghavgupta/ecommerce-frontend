import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  items: {},
  totalPrice: 0
};

const addToCart = (state, action) => {
    // check if the item already exists in cart
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);

    default:
      return state;
  }
};

export default reducer;
