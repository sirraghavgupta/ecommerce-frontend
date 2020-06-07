import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Input from '../Input';
import FormBox from '../hoc/FormBox';
import updateObject from '../Utilities/updateObject';
import checkValidity from '../Utilities/FormValidation';
import axios from '../Axios/myInstance';
import classes from './ForgotPassword.module.css';

const ForgotPassword = (props) => {
  const { history } = props;

  const [email, setEmail] = useState({
    elementConfig: {
      type: 'email',
      name: 'email',
      placeholder: 'Your Email'
    },
    label: 'Registered Email',
    value: '',
    validation: {
      required: true,
      isEmail: true
    },
    valid: true,
    touched: false
  });

  const [message, setMessage] = useState({
    success: '',
    error: ''
  });

  const inputChangeHandler = (event) => {
    const newState = updateObject(email, {
      value: event.target.value,
      valid: checkValidity(event.target.value, email.validation),
      touched: true
    });

    setEmail(newState);
  };

  const onSubmitHandler = () => {
    axios
      .post(`/forgot-password?email=${email.value}`)
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          setMessage({
            error: '',
            success: response.data.message
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message) {
          setMessage({
            success: '',
            error: error.response.data.message
          });
        }
      });
  };

  return (
    <FormBox>
      <h1>Forgot Password</h1>

      {message.success.length > 0 ? (
        <p style={{ color: 'green' }}>{message.success}</p>
      ) : null}
      {message.error.length > 0 ? (
        <p style={{ color: 'red' }}>{message.error}</p>
      ) : null}

      {message.success.length > 0 ? (
        <div>
          <p>Click on that link to reset your password.</p>
          <p>
            <a href="/">Click here</a> to go back to the home page.
          </p>
        </div>
      ) : (
        <form>
          <Input changed={inputChangeHandler} {...email} />
          <Button
            className={classes.Button}
            variant="success"
            disabled={!email.valid}
            onClick={onSubmitHandler}
          >
            Forgot Password
          </Button>
        </form>
      )}
    </FormBox>
  );
};

export default ForgotPassword;
