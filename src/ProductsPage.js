import React from 'react';
import ProductGrid from './ProductGrid';
import Filters from './Filters';

const ProductsPage = () => {
  return (
    <div>
      <Filters />
      <ProductGrid />
    </div>
  );
};

export default ProductsPage;
