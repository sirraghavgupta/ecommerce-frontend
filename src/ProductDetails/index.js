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
        <VariationChoice attribute={key} values={[...fieldValueMap.get(key)]} />
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

// const product = {
//   productDto: {
//     id: 121,
//     name: 'samsung alira smart full hd Tv',
//     brand: 'SAMSUNG',
//     categoryId: 91,
//     categoryDto: {
//       id: 91,
//       name: 'TV',
//       parent: {
//         id: 90,
//         name: 'electronics'
//       }
//     },
//     description:
//       'You can now turn this Samsung Smart TV into a full-fledged PC or your very own virtual music system. With features such as Live Cast and Screen Mirroring, you can have some good times with your family right at home. The Micro Dimming Pro feature lets you catch all the action on the big screen.',
//     isReturnable: true,
//     isCancelleable: true
//   },
//   variations: [
//     {
//       id: 122,
//       productId: 121,
//       quantityAvailable: 700,
//       price: 60000,
//       attributes: {
//         'screen size': '52',
//         color: 'black'
//       },
//       primaryImage:
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70',
//       secondaryImages: [
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gnr7bb5hj.jpeg?q=70',
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36ggzkarsuz.jpeg?q=70',
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gz9y5entz.jpeg?q=70',
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gf7wrb96g.jpeg?q=70'
//       ]
//     },
//     {
//       id: 123,
//       productId: 121,
//       quantityAvailable: 700,
//       price: 70000,
//       attributes: {
//         'screen size': '64',
//         color: 'black'
//       },
//       primaryImage:
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70'
//     },
//     {
//       id: 124,
//       productId: 121,
//       quantityAvailable: 700,
//       price: 40000,
//       attributes: {
//         'screen size': '32',
//         color: 'gray'
//       },
//       primaryImage:
//         'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70'
//     }
//   ]
// };
