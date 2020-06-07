import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  profile: {},
  loading: false,
  error: null
};

const fetchProfileStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const fetchProfileSuccess = (state, action) => {
  return updateObject(state, {
    profile: action.profile,
    loading: false,
    error: null
  });
};

const fetchProfileFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_START:
      return fetchProfileStart(state);
    case actionTypes.FETCH_PROFILE_SUCCESS:
      return fetchProfileSuccess(state, action);
    case actionTypes.FETCH_PROFILE_FAILED:
      return fetchProfileFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
