import React from 'react';
import Checkbox from '../Checkbox';
import classes from './Filter.module.css';

const Filter = (props) => {
  const { filterType, filterValues } = props;

  const filterChoices = filterValues.map((value) => (
    <Checkbox name={filterType} value={value} />
  ));

  return (
    <div className={classes.Filter}>
      <p className={classes.FilterType}>{filterType}</p>
      {filterChoices}
    </div>
  );
};

export default Filter;
