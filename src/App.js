import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';

function App() {
  const routes = (
    <Switch>
      <Route path="/product" component={ProductPage} />
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
