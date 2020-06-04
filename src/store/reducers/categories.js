import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  loading: false,
  error: null,
  categories: []
};

const fetchCategoriesStart = (state) => {
  return updateObject(state, { loading: true, error: false });
};

const fetchCategoriesSuccess = (state, action) => {
  return updateObject(state, { loading: false, categories: action.categories });
};

const fetchCategoriesFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return fetchCategoriesStart(state);

    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSuccess(state, action);

    case actionTypes.FETCH_CATEGORIES_FAILED:
      return fetchCategoriesFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
