import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';

function App() {
  const routes = (
    <Switch>
      <Route path="/product" component={ProductPage} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={ProductsPage} />
    </Switch>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
