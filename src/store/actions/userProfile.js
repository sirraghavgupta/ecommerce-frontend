import * as actionTypes from './actionTypes';
import axios from '../../Axios/myInstance';

export const fetchProfileStart = () => {
  return {
    type: actionTypes.FETCH_PROFILE_START
  };
};

export const fetchProfileSuccess = (profile) => {
  return {
    type: actionTypes.FETCH_PROFILE_SUCCESS,
    profile
  };
};

export const fetchProfileFailed = (error) => {
  return {
    type: actionTypes.FETCH_PROFILE_FAILED,
    error
  };
};

export const fetchProfile = (token) => {
  return (dispatch) => {
    dispatch(fetchProfileStart());
    axios
      .get('/customer/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        if (response.data.data)
          dispatch(
            fetchProfileSuccess({ ...response.data.data, isActive: 'true' })
          );
      })
      .catch((error) => {
        console.log(error);
        let errorMessage = 'Something went wrong!!';
        if (error && error.response && error.response.data) {
          errorMessage = error.response.data.message;
        }
        dispatch(fetchProfileFailed(errorMessage));
      });
  };
};
