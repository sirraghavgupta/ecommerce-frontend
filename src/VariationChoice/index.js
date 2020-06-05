import React from 'react';
import classes from './VariationChoice.module.css';

const VariationChoice = (props) => {
  const { attribute, values, activeValue } = props;

  const styling = [classes.Thumbnail, classes.Active];

  const thumbnails = values.map((value) =>
    value === activeValue ? (
      <div className={classes.Thumbnail}>{value}</div>
    ) : (
      <div className={styling.join(' ')}>{value}</div>
    )
  );

  return (
    <div className={classes.VariationChoice}>
      <h5 className={classes.FilterType}>{`${attribute} : `}</h5>
      <div>{thumbnails}</div>
    </div>
  );
};

export default VariationChoice;
