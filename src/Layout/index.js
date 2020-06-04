import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../Toolbar';
import Aux from '../Aux';
import CategoryDrawer from '../CategoryDrawer';
import * as actions from '../store/actions';
import Main from '../Main';

const Layout = (props) => {
  const { children, categories, loading, error, getCategories } = props;

  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);

  useEffect(() => {
    console.log('useEffect of LAYOUT');
  });

  useEffect(() => {
    console.log('useEffect of LAYOUT');
    getCategories(null);
  }, [getCategories]);

  const categoryDrawerToggleHandler = () => {
    console.log('clicked');
    setShowCategoryDrawer((showDrawer) => !showDrawer);
  };

  const categoryClickHandler = (id) => {
    console.log('category clicked with id - ', id);
    getCategories(id);
  };

  const backHandler = (newParentId) => {
    console.log('clicked back button');
    getCategories(newParentId);
  };

  return (
    <Aux>
      <Toolbar toggleCategoryBar={categoryDrawerToggleHandler} />

      <CategoryDrawer
        toggleHandler={categoryDrawerToggleHandler}
        showDrawer={showCategoryDrawer}
        categories={categories}
        categoryClickHandler={categoryClickHandler}
        backHandler={backHandler}
      />

      <Main>{children}</Main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categoryDrawer.categories,
    loading: state.categoryDrawer.loading,
    error: state.categoryDrawer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (parentId) => dispatch(actions.fetchCategories(parentId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
