import React, { useState, useEffect } from 'react';
import { Image, Button } from 'react-bootstrap';
import SecondaryImageThumbnail from '../SecondaryImageThumbnail';
import classes from './ProductImages.module.css';

const ProductImages = (props) => {
  const {
    primaryImage,
    secondaryImages,
    buyNowHandler,
    addToCartHandler
  } = props;

  const thumbnails = [...secondaryImages, primaryImage];
  /**
   * problem in this component - this line is getting printed twice everytime.
   * but use effis printing only once. i dont know why.
   * plus, react is not re initialising the secondary images array. and if i
   * do push on the secondaryImages array, its getting duplicate primmary images
   * evrrytime.
   */
  console.log(thumbnails);

  const [currImage, setCurrImage] = useState(primaryImage);

  useEffect(() => {
    console.log('re rendered.');
  });

  const thumbnailClickHandler = (index) => {
    console.log('clicked ', index);
    setCurrImage(thumbnails[index]);
  };

  return (
    <div className={classes.Main}>
      <div className={classes.ProductImages}>
        <div className={classes.Thumbnails}>
          {thumbnails.map((image, index) => (
            <SecondaryImageThumbnail
              imageUrl={image}
              key={index}
              clicked={() => {
                thumbnailClickHandler(index);
              }}
            />
          ))}
        </div>

        <div className={classes.PrimaryImage}>
          <Image src={currImage} className={classes.Image} />
        </div>
      </div>

      <div className={classes.Buttons}>
        <Button
          variant="primary"
          className={classes.Button}
          onClick={buyNowHandler}
        >
          Buy now
        </Button>
        <Button
          variant="primary"
          className={classes.Button}
          onClick={addToCartHandler}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductImages;
