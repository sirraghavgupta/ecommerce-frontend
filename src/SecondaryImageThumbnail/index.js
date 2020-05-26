import React from 'react';
import { Image } from 'react-bootstrap';
import classes from './SecondaryImageThumbnail.module.css';

const SecondaryImageThumbnail = (props) => {
  const { imageUrl, clicked } = props;

  return (
    <div className={classes.Thumbnail} onClick={clicked}>
      <Image src={imageUrl} className={classes.Image} />
    </div>
  );
};

export default SecondaryImageThumbnail;
