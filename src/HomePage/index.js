import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import classes from './HomePage.module.css';

const HomePage = (props) => {
  const { location, setAuthRedirectPath } = props;

  useEffect(() => {
    // const { pathname, search } = location;
    console.log('%%%% PROPS OF HOME PAGE');
    console.log(props);
    // console.log(`${pathname}${search}`);
    // setAuthRedirectPath(`${pathname}${search}`);
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
