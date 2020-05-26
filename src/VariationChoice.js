import React from 'react';
import classes from './VariationChoice.module.css';

const VariationChoice = (props) => {
  const { attribute, values } = props;

  const thumbnails = values.map((value) => (
    <div className={classes.Thumbnail}>{value}</div>
  ));

  return (
    <div className={classes.VariationChoice}>
      <h5 className={classes.FilterType}>{`${attribute} : `}</h5>
      <div>{thumbnails}</div>
    </div>
  );
};

export default VariationChoice;
