import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../Utilities/updateObject';

const initialState = {
  accessToken: null,
  refreshToken: null,
  userRole: null,
  error: null,
  loading: false
};

const loginStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    accessToken: action.accessToken,
    refreshToken: action.refreshToken,
    userRole: action.userRole
  });
};

const loginFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const logout = (state) => {
  return updateObject(state, {
    accessToken: null,
    refreshToken: null,
    userRole: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return loginStart(state);

    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);

    case actionTypes.LOGIN_FAILED:
      return loginFailed(state, action);

    case actionTypes.LOGOUT:
      return logout(state);

    default:
      return state;
  }
};

export default reducer;
