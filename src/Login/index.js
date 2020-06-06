import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../Input';
import FormBox from '../hoc/FormBox';
import updateObject from '../Utilities/updateObject';
import checkValidity from '../Utilities/FormValidation';
import * as loginActions from '../store/actions';

import classes from './Login.module.css';

const Login = (props) => {
  const { error, authRedirectPath, history } = props;

  console.log('####### Login component props ######');
  console.log(props);

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
      valid: true,
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
      valid: true,
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
    props.doLogin(
      loginForm.email.value,
      loginForm.password.value,
      authRedirectPath,
      history
    );
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
    <FormBox>
      <h1>Login</h1>

      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <form>
        {formElements}
        <Button
          className={classes.LoginButton}
          variant="success"
          disabled={!formIsValid}
          active={formIsValid}
          onClick={submitHandler}
        >
          Login
        </Button>
        <div>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className={classes.Signup}>
          <Button variant="success">New Customer</Button>
          <Button variant="success">New Seller</Button>
        </div>
      </form>
    </FormBox>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.login.error,
    authRedirectPath: state.login.authRedirectPath
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (email, password, authRedirectPath, history) =>
      dispatch(loginActions.login(email, password, authRedirectPath, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
