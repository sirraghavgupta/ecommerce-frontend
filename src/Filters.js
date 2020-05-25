import React from 'react';
import Filter from './Filter';
import classes from './Filters.module.css';

const Filters = () => {
  const filters = [
    { field: 'size', values: ['XS', 'S', 'M', 'L', 'XL'] },
    { field: 'collar', values: ['indian', 'chinese'] },
    { field: 'color', values: ['red', 'blue', 'green', 'yellow', 'orange'] },
    { field: 'pockets', values: ['1', '2'] }
  ];

  const filterElements = filters.map((filter) => (
    <Filter filterType={filter.field} filterValues={filter.values} />
  ));
  return <div className={classes.Filters}>{filterElements}</div>;
};

export default Filters;
