import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Layout from './Layout';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import HomePage from './HomePage';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import ActivateUser from './ActivateUser';
import Addresses from './Addresses';
import UserProfile from './UserProfile';
import Orders from './Orders';

import * as loginActions from './store/actions';

function App(props) {
  const {
    onLoadTryAutoLogin,
    isAuthenticated,
    userRole,
    history,
    authRedirectPath
  } = props;

  useEffect(() => {
    console.log('useEffect of APP');
  });

  useEffect(() => {
    onLoadTryAutoLogin();
  }, [onLoadTryAutoLogin]);

  let routes = null;

  // if (userRole === 'CUSTOMER') {
  routes = (
    <Switch>
      <Route path="/product" component={ProductPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/products/:categoryId" component={ProductsPage} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/activate/" component={ActivateUser} />
      <Route path="/" component={HomePage} />

      {/* <Redirect from="/cart" to="/" />
      <Redirect from="/logout" to="/" />
      <Redirect from="/change-password" to="/" />
      <Redirect from="/user/" to="/" /> */}
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/product" component={ProductPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/logout" component={Logout} />
        <Route path="/products/:categoryId" component={ProductsPage} />
        <Route path="/change-password" component={ResetPassword} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/user/addresses" component={Addresses} />
        <Route path="/user/orders" component={Orders} />
        <Route path="/" component={HomePage} />
        {/* 
        <Redirect from="/login" to="/" />
        <Redirect from="/signup" to="/" />
        <Redirect from="/forgot-password" to="/" />
        <Redirect from="reset-password" to="/" />
        <Redirect from="/activate" to="/" /> */}
      </Switch>
    );
  }
  // }

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.accessToken != null,
    userRole: state.login.userRole,
    authRedirectPath: state.login.authRedirectPath
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadTryAutoLogin: (history) =>
      dispatch(loginActions.checkAuthState(history))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
