import React from 'react';
import classes from './FormBox.module.css';

const FormBox = (props) => {
  const { children } = props;

  return <div className={classes.FormBox}>{children}</div>;
};

export default FormBox;
