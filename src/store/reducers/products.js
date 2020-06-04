import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  productItems: [],
  loading: false,
  error: null
};

const fetchProductsStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    productItems: action.productItems,
    error: null
  });
};

const fetchProductsFailure = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return fetchProductsStart(state);

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);

    case actionTypes.FETCH_PRODUCTS_FAILED:
      return fetchProductsFailure(state, action);

    default:
      return state;
  }
};

export default reducer;
