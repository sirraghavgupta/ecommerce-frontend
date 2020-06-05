import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  product: {},
  variationId: null,
  loading: false,
  error: null
};

const fetchProductStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const fetchProductSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    product: action.product,
    error: null,
    variationId: action.variationId
  });
};

const fetchProductFailure = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_START:
      return fetchProductStart(state);

    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return fetchProductSuccess(state, action);

    case actionTypes.FETCH_PRODUCT_FAILED:
      return fetchProductFailure(state, action);

    default:
      return state;
  }
};

export default reducer;
