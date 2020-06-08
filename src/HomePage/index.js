import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import classes from './HomePage.module.css';

const HomePage = (props) => {
  const { setAuthRedirectPath } = props;

  useEffect(() => {
    console.log('%%%% PROPS OF HOME PAGE');
    console.log(props);
    setAuthRedirectPath('/');
  }, []);

  return <p className={classes.HomePage}>Home page</p>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
