import React from 'react';
import VariationChoice from '../VariationChoice';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
  const { product, requestedVariationId } = props;

  let fieldChoices;
  let fieldValues;

  let requiredVariation;
  if (Object.keys(product).length > 0) {
    console.log(product, requestedVariationId);

    requiredVariation = product.variations.find((variation) => {
      return `${variation.id}` === `${requestedVariationId}`;
    });

    fieldValues = Object.keys(requiredVariation.attributes).map((field) => (
      <tr>
        <td className={classes.Label}>{field}</td>
        <td className={classes.Value}>{requiredVariation.attributes[field]}</td>
      </tr>
    ));

    const fieldValueMap = new Map();
    product.variations.forEach((variation) => {
      console.log(variation);
      Object.keys(variation.attributes).forEach((key) => {
        console.log(key);
        if (fieldValueMap.has(key)) {
          console.log('key found');
          fieldValueMap.set(
            key,
            fieldValueMap.get(key).add(variation.attributes[key])
          );
        } else {
          console.log('key not found');
          fieldValueMap.set(key, new Set());
        }
      });
    });
    console.log(fieldValueMap);

    fieldChoices = [...fieldValueMap.keys()].map((key) => {
      return (
        <VariationChoice
          attribute={key}
          values={[...fieldValueMap.get(key)]}
          activeValue={requiredVariation.attributes[key]}
        />
      );
    });
  }
  return (
    <div className={classes.ProductDetails}>
      <table className={classes.Table}>
        <tr>
          <td className={classes.Name} colSpan="2">
            <h3>{product.productDto.name}</h3>
          </td>
        </tr>
        <tr>
          <td className={classes.Label}>Brand</td>
          <td className={classes.Value}>{product.productDto.brand}</td>
        </tr>
        <tr>
          <td className={classes.Label}>Price</td>
          <td className={classes.Value}>{`Rs. ${requiredVariation.price}`}</td>
        </tr>
        <tr>
          <td className={classes.Label}>Quantity</td>
          <td className={classes.Value}>
            {requiredVariation.quantityAvailable}
          </td>
        </tr>
        <tr>
          <td className={classes.Label}>Description</td>
          <td className={classes.Value}>{product.productDto.description}</td>
        </tr>
        <tr>
          <td className={classes.Label}> Returnable</td>
          <td className={classes.Value}>
            {product.productDto.isReturnable ? 'Returnable' : 'Not Returnable'}
          </td>
        </tr>
        <tr>
          <td className={classes.Label}> Cancelleable</td>
          <td className={classes.Value}>
            {product.productDto.isCancelleable
              ? 'Cancelleable'
              : 'Not Cancelleable'}
          </td>
        </tr>
        {fieldValues}
      </table>

      <div>{fieldChoices}</div>
    </div>
  );
};

export default ProductDetails;
