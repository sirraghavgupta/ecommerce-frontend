import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import ProductsPage from './containers/ProductsPage';
import ProductPage from './containers/ProductPage';
import HomePage from './containers/HomePage';

import * as loginActions from './store/actions';

const Cart = React.lazy(() => {
  return import('./containers/Cart');
});

const Login = React.lazy(() => {
  return import('./containers/Login');
});

const Signup = React.lazy(() => {
  return import('./containers/Signup');
});

const Logout = React.lazy(() => {
  return import('./containers/Logout');
});

const ForgotPassword = React.lazy(() => {
  return import('./containers/ForgotPassword');
});

const ResetPassword = React.lazy(() => {
  return import('./containers/ResetPassword');
});

const ActivateUser = React.lazy(() => {
  return import('./containers/ActivateUser');
});

const Addresses = React.lazy(() => {
  return import('./containers/Addresses');
});

const UserProfile = React.lazy(() => {
  return import('./containers/UserProfile');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders');
});

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
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route path="/products/:categoryId" component={ProductsPage} />
      <Route
        exact
        path="/forgot-password"
        render={(props) => <ForgotPassword {...props} />}
      />
      <Route
        exact
        path="/reset-password"
        render={(props) => <ResetPassword {...props} />}
      />
      <Route
        exact
        path="/activate/customer"
        render={(props) => <ActivateUser {...props} />}
      />
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
        <Route exact path="/cart" render={(props) => <Cart {...props} />} />
        <Route exact path="/logout" render={(props) => <Logout {...props} />} />
        <Route path="/products/:categoryId" component={ProductsPage} />
        <Route
          exact
          path="/change-password"
          render={(props) => <ResetPassword {...props} />}
        />
        <Route
          exact
          path="/user/profile"
          render={(props) => <UserProfile {...props} />}
        />
        <Route
          exact
          path="/user/addresses"
          render={(props) => <Addresses {...props} />}
        />
        <Route
          exact
          path="/user/orders"
          render={(props) => <Orders {...props} />}
        />
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
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
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
