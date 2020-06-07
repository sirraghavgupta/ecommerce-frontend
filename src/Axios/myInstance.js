import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:8080/'
});

instance.interceptors.request.use(
  (request) => {
    console.log('[ INTERCEPTOR ] inside request success method.');
    return request;
  },
  (err) => {
    console.log('[ INTERCEPTOR ] inside request failure method');
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log('[ INTERCEPTOR ] inside the success response method');
    return response;
  },
  (err) => {
    console.log('[ INTERCEPTOR ] inside the faliure response block');
    return Promise.reject(err);
  }
);

export default instance;
