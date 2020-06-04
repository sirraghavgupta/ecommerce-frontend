import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../Input';
import updateObject from '../Utilities/updateObject';
import checkValidity from '../Utilities/FormValidation';
import * as loginActions from '../store/actions';

import classes from './Login.module.css';

const Login = (props) => {
  const [loginForm, setloginForm] = useState({
    email: {
      elementConfig: {
        type: 'email',
        name: 'email',
        placeholder: 'Your Email'
      },
      label: 'Email',
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      isValid: true,
      touched: false
    },

    password: {
      elementConfig: {
        type: 'password',
        name: 'password',
        placeholder: 'Your Password'
      },
      label: 'Password',
      value: '',
      validation: {
        required: true,
        minLength: 8,
        maxLength: 15,
        validPassword: true
      },
      isValid: true,
      touched: false
    }
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangeHandler = (event, fieldname) => {
    const newFieldValue = updateObject(loginForm[fieldname], {
      value: event.target.value,
      touched: true,
      valid: checkValidity(event.target.value, loginForm[fieldname].validation)
    });

    const newloginForm = updateObject(loginForm, {
      [fieldname]: newFieldValue
    });

    let formValid = true;
    Object.keys(loginForm).forEach((field) => {
      formValid = formValid && newloginForm[field].valid;
    });
    setloginForm(newloginForm);
    setFormIsValid(formValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.doLogin(loginForm.email.value, loginForm.password.value);
  };

  const formElements = Object.keys(loginForm).map((field) => (
    <Input
      key={field}
      {...loginForm[field]}
      changed={(event) => {
        inputChangeHandler(event, field);
      }}
    />
  ));

  return (
    <div className={classes.LoginForm}>
      <h1>Login</h1>
      <form>
        {formElements}
        <Button
          variant="success"
          disabled={!formIsValid}
          active={formIsValid}
          onClick={submitHandler}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (email, password) => dispatch(loginActions.login(email, password))
  };
};

export default connect(null, mapDispatchToProps)(Login);
