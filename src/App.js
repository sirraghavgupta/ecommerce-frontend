import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

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
    onLoadTryAutoLogin(history, authRedirectPath);
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
      <Route path="/" component={HomePage} />
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
        <Route path="/" component={HomePage} />
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
