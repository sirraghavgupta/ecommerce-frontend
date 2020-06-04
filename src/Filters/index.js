import React from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';

import classes from './Filters.module.css';

const Filters = (props) => {
  const { loading, error, filters } = props;

  // const filters = [
  //   { field: 'size', values: ['XS', 'S', 'M', 'L', 'XL'] },
  //   { field: 'collar', values: ['indian', 'chinese'] },
  //   { field: 'color', values: ['red', 'blue', 'green', 'yellow', 'orange'] },
  //   { field: 'pockets', values: ['1', '2'] }
  // ];

  console.log(props);

  const filterElements = [];
  if (Object.keys(filters).length > 0) {
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

const mapStateToProps = (state) => {
  return {
    loading: state.filteringState.loading,
    error: state.filteringState.error,
    filters: state.filteringState.filters
  };
};

export default connect(mapStateToProps)(Filters);
