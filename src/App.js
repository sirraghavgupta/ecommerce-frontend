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
import ActivateUser from './ActivateUser';
import Addresses from './Addresses';
import UserProfile from './UserProfile';
import Orders from './Orders';

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
