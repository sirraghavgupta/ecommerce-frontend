import * as actionTypes from './actionTypes';
import { fetchProducts } from './products';
import axios from '../../Axios/myInstance';
import { fetchFilters } from './filters';

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

export const fetchCategories = (categoryId) => {
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
          dispatch(fetchProducts(categoryId));
          dispatch(fetchFilters(categoryId));
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
