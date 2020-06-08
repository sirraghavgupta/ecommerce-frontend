import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import ProductImages from '../../components/Products/ProductImages';
import ProductDetails from '../../components/Products/ProductDetails';
import classes from './ProductPage.module.css';

const ProductPage = (props) => {
  const { product, getProduct, location, varId, setAuthRedirectPath } = props;

  let productId;
  let variationId;

  const query = new URLSearchParams(location.search);

  // get the query params
  if (query.has('productId')) {
    productId = query.get('productId');
  }
  if (query.has('variationId')) {
    variationId = query.get('variationId');
  }
  console.log(productId, variationId);

  useEffect(() => {
    const { pathname, search } = location;
    console.log('%%%% PROPS OF PRODUCT PAGE');
    console.log(props);
    setAuthRedirectPath(`${pathname}${search}`);
  }, []);

  useEffect(() => {
    console.log('useEffect of PRODUCT PAGE');
    // get the product and set the state.
    getProduct(productId, variationId);
  }, [productId, variationId]);

  let desiredVariation = null;
  console.log('@@@@ product = ', product);

  if (Object.keys(product).length > 0 && product.variations && varId) {
    if (!variationId) {
      console.log('@@@@ no variation id recieved.');
      [desiredVariation] = product.variations;
    } else {
      console.log('@@@@ variation id recieved. finding the variation.');

      product.variations.forEach((variation) => {
        console.log('@@@@ inside the loop', typeof variation.id, typeof varId);
        if (`${variation.id}` === `${varId}`) {
          console.log('inside if');
          desiredVariation = { ...variation };
        }
      });
    }
  }

  console.log('@@@@ desired Variation = ', desiredVariation);

  const onBuyNowHandler = (prodId, variantId) => {
    console.log('buying product ', prodId, variantId);
  };

  const onAddToCartHandler = (prodId, variantId) => {
    console.log('adding to cart ', prodId, variantId);
  };

  return desiredVariation ? (
    <div className={classes.ProductPage}>
      <ProductImages
        buyNowHandler={() => onBuyNowHandler(product.productDto.id, varId)}
        addToCartHandler={() =>
          onAddToCartHandler(product.productDto.id, varId)
        }
        primaryImage={desiredVariation.primaryImage}
        secondaryImages={
          desiredVariation.secondaryImages
            ? desiredVariation.secondaryImages
            : []
        }
      />
      <ProductDetails product={product} requestedVariationId={varId} />
    </div>
  ) : (
    <p>No product found</p>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.productState.loading,
    error: state.productState.error,
    product: state.productState.product,
    varId: state.productState.variationId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (productId, variationId) =>
      dispatch(actions.fetchProduct(productId, variationId)),
    setAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
