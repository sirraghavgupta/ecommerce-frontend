import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const {
    valid,
    validation,
    touched,
    elementType,
    elementConfig,
    label,
    value,
    changed
  } = props;

  let inputElement = null;

  let validationError = null;

  const inputClasses = [classes.InputElement];

  if (!valid && validation && touched) {
    inputClasses.push(classes.Invalid);

    validationError = (
      <p className={classes.ValidationError}>Please enter a valid value!</p>
    );
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case 'select':
      const options = elementConfig.options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.displayValue}
          </option>
        );
      });

      inputElement = (
        <select className={inputClasses.join(' ')} onChange={changed}>
          {options}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{`${label}:`}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
