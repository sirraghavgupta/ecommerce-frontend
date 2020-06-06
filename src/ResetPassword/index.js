import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import FormBox from '../hoc/FormBox';
import checkValidity from '../Utilities/FormValidation';
import updateObject from '../Utilities/updateObject';
import Input from '../Input';
import * as actions from '../store/actions';
import axios from '../Axios/myInstance';

import classes from './ResetPassword.module.css';

const ResetPassword = (props) => {
  const { isAuthenticated, token, doLogout } = props;

  const [passwordResetForm, setPasswordResetForm] = useState({
    currentPassword: {
      elementConfig: {
        type: 'password',
        name: 'currentPassword',
        placeholder: 'Your Current Password'
      },
      label: 'Current Password',
      value: '',
      validation: {
        required: true,
        validPassword: true
      },
      valid: true,
      touched: false
    },
    password: {
      elementConfig: {
        type: 'password',
        name: 'password',
        placeholder: 'Your New Password'
      },
      label: 'New Password',
      value: '',
      validation: {
        required: true,
        validPassword: true
      },
      isValid: true,
      touched: false
    },
    confirmPassword: {
      elementConfig: {
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm Your New Password'
      },
      label: 'Confirm New Password',
      value: '',
      validation: {
        required: true,
        matchPassword: true
      },
      isValid: true,
      touched: false
    }
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const [message, setMessage] = useState({
    success: '',
    error: ''
  });

  const inputChangeHandler = (event, fieldname) => {
    let isValid = true;
    if (fieldname === 'confirmPassword') {
      if (event.target.value !== passwordResetForm.password.value) {
        isValid = false;
      }
    }

    const newFieldValue = updateObject(passwordResetForm[fieldname], {
      value: event.target.value,
      touched: true,
      valid:
        isValid &&
        checkValidity(
          event.target.value,
          passwordResetForm[fieldname].validation
        )
    });

    const newpasswordResetForm = updateObject(passwordResetForm, {
      [fieldname]: newFieldValue
    });

    let formValid = true;
    Object.keys(passwordResetForm).forEach((field) => {
      formValid = formValid && newpasswordResetForm[field].valid;
    });
    setPasswordResetForm(newpasswordResetForm);
    setFormIsValid(formValid);
  };

  const submitHandler = () => {
    const { location } = props;
    const { pathname, search } = location;
    let url = `${pathname}${search}`;

    let headers = null;
    if (isAuthenticated) {
      url = '/change-password';
      headers = {
        Authorization: `Bearer ${token}`
      };
    }

    axios
      .put(
        url,
        {
          password: passwordResetForm.password.value,
          confirmPassword: passwordResetForm.confirmPassword.value
        },
        {
          headers
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          setMessage({
            error: '',
            success: response.data.message
          });
        }
        doLogout();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message) {
          setMessage({
            success: '',
            error: error.response.data.message
          });
        }
      });
  };

  const fields = ['password', 'confirmPassword'];
  if (isAuthenticated) {
    fields.unshift('currentPassword');
  }
  const formElements = fields.map((field) => (
    <Input
      key={field}
      {...passwordResetForm[field]}
      changed={(event) => {
        inputChangeHandler(event, field);
      }}
    />
  ));

  return (
    <FormBox>
      <h1>Reset Password</h1>
      {message.success.length > 0 ? (
        <p style={{ color: 'green' }}>{message.success}</p>
      ) : null}
      {message.error.length > 0 ? (
        <p style={{ color: 'red' }}>{message.error}</p>
      ) : null}
      <form>{formElements}</form>
      <Button
        variant="success"
        onClick={submitHandler}
        disabled={!formIsValid}
        className={classes.Button}
      >
        Reset Password
      </Button>
    </FormBox>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.accessToken != null,
    token: state.login.accessToken
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
