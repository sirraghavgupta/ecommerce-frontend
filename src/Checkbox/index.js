import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {
  const { name, value } = props;

  return (
    <div>
      <input
        type="checkbox"
        id={`${name}_${value}`}
        name={name}
        value={value}
      />
      <label htmlFor={`${name}_${value}`} className={classes.Label}>
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
