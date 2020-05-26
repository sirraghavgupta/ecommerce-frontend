import React from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import classes from './ProductPage.module.css';

const ProductPage = () => {
  const product = {
    primaryImage:
      'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70',
    secondaryImages: [
      'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gnr7bb5hj.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36ggzkarsuz.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gz9y5entz.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gf7wrb96g.jpeg?q=70'
    ]
  };

  return (
    <div className={classes.ProductPage}>
      <ProductImages product={product} />
      <ProductDetails />
    </div>
  );
};

export default ProductPage;
