import * as actionTypes from './actionTypes';
import axios from '../../Axios/myInstance';

export const toggleCategoryDrawer = () => {
  return {
    type: actionTypes.TOGGLE_CATEGORY_DRAWER
  };
};

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAILED,
    error
  };
};

export const fetchCategories = (categoryId, history) => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());

    let url = `/categories/customer?id=${categoryId}`;

    if (categoryId === null) {
      url = `/categories/customer`;
    }

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data.data.length === 0) {
          console.log('pushing the history');
          history.push(`/products/${categoryId}`);
          dispatch(toggleCategoryDrawer());
        } else {
          dispatch(fetchCategoriesSuccess(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchCategoriesFailed(error));
      });
  };
};
