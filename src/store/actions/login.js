import axios from '../../Axios/myInstance';
import decodeJwtToken from '../../Utilities/decodeJwtToken';
import getExpirationDate from '../../Utilities/getExpirationDate';
import * as actionTypes from './actionTypes';

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('expirationDate');

  return {
    type: actionTypes.LOGOUT
  };
};

const checkAuthTimeout = (expiresIn) => {
  console.log('dispatching the checkAuth time our action from the method...');
  return (dispatch) => {
    console.log('running the checkAuth time our action...');
    setTimeout(() => {
      dispatch(logout());
    }, expiresIn * 1000);
  };
};

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = (accessToken, refreshToken, userRole) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    accessToken,
    refreshToken,
    userRole
  };
};

export const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());

    const formData = new FormData();

    formData.append('grant_type', 'password');
    formData.append('client_id', 'live-test');
    formData.append('username', email);
    formData.append('password', password);
    formData.append('client_secret', 'abcde');

    axios
      .post('/oauth/token', formData)
      .then((response) => {
        console.log('login successful');

        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        const expirationDate = getExpirationDate(response.data.expires_in);

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('expirationDate', expirationDate);

        const token = decodeJwtToken(response.data.access_token);
        const userRole = token.authorities[0].substring(5);
        console.log(userRole);
        dispatch(loginSuccess(accessToken, refreshToken, userRole));
        dispatch(checkAuthTimeout(response.data.expires_in));
      })
      .catch((error) => {
        console.log('login failed with error');
        console.log(error);
        dispatch(loginFailed(error));
      });
  };
};

export const checkAuthState = () => {
  console.log('inside on try auto login');
  return (dispatch) => {
    console.log('executing the dispatched auto login action...... ');
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.log(' logging out  ', accessToken);
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        console.log('logging out', expirationDate);
        dispatch(logout());
      } else {
        console.log('dispatching the auto login success action...');
        dispatch(
          loginSuccess(
            accessToken,
            localStorage.getItem('refreshToken'),
            localStorage.getItem('userRole')
          )
        );
        console.log('auto login complete ....');
        console.log('dispatching the check auth timeout action.....');
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
