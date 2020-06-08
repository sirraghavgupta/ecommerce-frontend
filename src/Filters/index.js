import React, { useEffect } from 'react';

import Filter from '../Filter';

import classes from './Filters.module.css';

const Filters = (props) => {
  const { filters } = props;

  console.log(props);
  useEffect(() => {
    console.log('useEffect of [ FILTERS ]');
  });

  const filterElements = [];

  if (filters && Object.keys(filters).length > 0) {
    const { fieldValues, brands } = filters;

    Object.keys(fieldValues).forEach((key) => {
      filterElements.push(
        <Filter filterType={key} filterValues={fieldValues[key]} />
      );
    });

    if (brands.length > 0) {
      filterElements.push(<Filter filterType="brand" filterValues={brands} />);
    }
  }

  return <div className={classes.Filters}>{filterElements}</div>;
};

export default Filters;
