import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import ProductsPage from './containers/ProductsPage';
import ProductPage from './containers/ProductPage';
import Cart from './containers/Cart';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Logout from './containers/Logout';
import HomePage from './containers/HomePage';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import ActivateUser from './containers/ActivateUser';
import Addresses from './containers/Addresses';
import UserProfile from './containers/UserProfile';
import Orders from './containers/Orders';

import * as loginActions from './store/actions';

function App(props) {
  const { onLoadTryAutoLogin, isAuthenticated } = props;

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
      <Route exact path="/product" component={ProductPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/products/:categoryId" component={ProductsPage} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/activate/customer" component={ActivateUser} />
      <Route exact path="/" component={HomePage} />
      <Route
        render={() => {
          return (
            <div>
              Not a valid route. PLease go back to <a href="/">Home</a>
            </div>
          );
        }}
      />
    </Switch>
  );

  if (isAuthenticated) {
    console.log('inside isAuthenticated =======================');
    routes = (
      <Switch>
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/products/:categoryId" component={ProductsPage} />
        <Route exact path="/change-password" component={ResetPassword} />
        <Route exact path="/user/profile" component={UserProfile} />
        <Route exact path="/user/addresses" component={Addresses} />
        <Route exact path="/user/orders" component={Orders} />
        <Route exact path="/" component={HomePage} />
        <Route
          render={() => {
            return (
              <div>
                Not a valid route. PLease go back to <a href="/">Home</a>
              </div>
            );
          }}
        />
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
