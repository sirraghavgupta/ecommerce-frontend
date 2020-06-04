import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  loading: false,
  error: null,
  filters: {}
};

const fetchFiltersStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const fetchFiltersSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    filters: action.filteringData
  });
};

const fetchFiltersFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FILTERS_START:
      return fetchFiltersStart(state);

    case actionTypes.FETCH_FILTERS_SUCCESS:
      return fetchFiltersSuccess(state, action);

    case actionTypes.FETCH_FILTERS_FAILED:
      return fetchFiltersFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
