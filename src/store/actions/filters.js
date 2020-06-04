import * as actionTypes from './actionTypes';
import axios from '../../Axios/myInstance';

export const fetchFiltersStart = () => {
  return {
    type: actionTypes.FETCH_FILTERS_START
  };
};

export const fetchFiltersSuccess = (filters) => {
  return {
    type: actionTypes.FETCH_FILTERS_SUCCESS,
    filteringData: filters
  };
};

export const fetchFiltersFailed = (error) => {
  return {
    type: actionTypes.FETCH_FILTERS_FAILED,
    error
  };
};

export const fetchFilters = (categoryId) => {
  return (dispatch) => {
    dispatch(fetchFiltersStart);

    axios
      .get(`/category/filtering-details/${categoryId}`)

      .then((response) => {
        console.log(response);
        dispatch(fetchFiltersSuccess(response.data.data));
      })

      .catch((error) => {
        console.log(error);
        dispatch(fetchFiltersFailed(error));
      });
  };
};
