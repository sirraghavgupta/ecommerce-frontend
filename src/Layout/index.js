import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Toolbar from '../Toolbar';
import Aux from '../Aux';
import CategoryDrawer from '../CategoryDrawer';
import * as actions from '../store/actions';
import Main from '../Main';

const Layout = (props) => {
  console.log('=== [ LAYOUT ] ===', props);

  const {
    children,
    categories,
    loading,
    error,
    getCategories,
    toggleCategories,
    showCategoryDrawer,
    history
  } = props;

  // const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);

  useEffect(() => {
    console.log('useEffect of LAYOUT');
  });

  useEffect(() => {
    console.log('useEffect of LAYOUT');
    getCategories(null);
  }, [getCategories]);

  const categoryDrawerToggleHandler = () => {
    console.log('clicked');
    toggleCategories();
  };

  const categoryClickHandler = (id) => {
    console.log('category clicked with id - ', id);
    getCategories(id, history);
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
    error: state.categoryDrawer.error,
    showCategoryDrawer: state.categoryDrawer.showCategoryDrawer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (parentId, history) =>
      dispatch(actions.fetchCategories(parentId, history)),
    toggleCategories: () => dispatch(actions.toggleCategoryDrawer())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
