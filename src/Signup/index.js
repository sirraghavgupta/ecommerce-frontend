import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import Input from '../Input';
import FormBox from '../hoc/FormBox';
import updateObject from '../Utilities/updateObject';
import checkValidity from '../Utilities/FormValidation';
import classes from './Signup.module.css';

const Signup = (props) => {
  const { history } = props;

  const [signupForm, setSignupForm] = useState({
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
    firstName: {
      elementConfig: {
        type: 'text',
        name: 'firstName',
        placeholder: 'Your First Name'
      },
      label: 'First Name',
      value: '',
      validation: {
        required: true,
        isCharOnly: true
      },
      valid: true,
      touched: false
    },
    middleName: {
      elementConfig: {
        type: 'text',
        name: 'mniddleName',
        placeholder: 'Your Middle Name'
      },
      label: 'Middle Name',
      value: '',
      validation: {
        isCharOnly: false,
        required: false
      },
      valid: true,
      touched: false
    },
    lastName: {
      elementConfig: {
        type: 'text',
        name: 'lastName',
        placeholder: 'Your Last Name'
      },
      label: 'Last Name',
      value: '',
      validation: {
        required: true,
        isCharOnly: true
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
        validPassword: true
      },
      valid: true,
      touched: false
    },
    confirmPassword: {
      elementConfig: {
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm Your Password'
      },
      label: 'Confirm Password',
      value: '',
      validation: {
        required: true,
        matchPassword: true
      },
      valid: true,
      touched: false
    },
    phoneNumber: {
      elementConfig: {
        type: 'text',
        name: 'phoneNumber',
        placeholder: 'Your Phone Number'
      },
      label: 'Phone Number',
      value: '',
      validation: {
        required: true,
        isPhoneNumber: true
      },
      valid: true,
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
      if (event.target.value !== signupForm.password.value) {
        isValid = false;
      }
    }
    const newFieldValue = updateObject(signupForm[fieldname], {
      value: event.target.value,
      touched: true,
      valid:
        isValid &&
        checkValidity(event.target.value, signupForm[fieldname].validation)
    });

    const newsignupForm = updateObject(signupForm, {
      [fieldname]: newFieldValue
    });

    let formValid = true;
    Object.keys(signupForm).forEach((field) => {
      formValid = formValid && newsignupForm[field].valid;
    });
    setSignupForm(newsignupForm);
    setFormIsValid(formValid);
  };

  const submitHandler = (event) => {
    console.log('clicked to signup.');
    event.preventDefault();
    const newCustomer = {
      email: signupForm.email.value,
      firstName: signupForm.firstName.value,
      middleName: signupForm.middleName.value,
      lastName: signupForm.lastName.value,
      password: signupForm.password.value,
      confirmPassword: signupForm.confirmPassword.value,
      contact: signupForm.phoneNumber.value
    };
    console.log(newCustomer);

    axios
      .post('http://localhost:8080/register/customer', newCustomer)
      .then((response) => {
        console.log(response);
        if (response.data && response.data.message) {
          setMessage({
            error: '',
            success: response.data.message
          });
        }
        // eslint-disable-next-line no-alert
        alert(message.success);
        history.replace('/login');
      })
      .catch((error) => {
        console.log(error);
        let errorMessage = 'Something went wrong!!';
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message;
        }
        setMessage({
          success: '',
          error: errorMessage
        });
      });
  };

  const formElements = Object.keys(signupForm).map((field) => (
    <Input
      key={field}
      {...signupForm[field]}
      changed={(event) => {
        inputChangeHandler(event, field);
      }}
    />
  ));

  return (
    <FormBox>
      <h1>Signup</h1>

      {message.success.length > 0 ? (
        <p style={{ color: 'green' }}>{message.success}</p>
      ) : null}

      {message.error.length > 0 ? (
        <p style={{ color: 'red' }}>{message.error}</p>
      ) : null}

      <form>{formElements}</form>
      <Button
        className={classes.Button}
        variant="success"
        disabled={!formIsValid}
        active={formIsValid}
        onClick={submitHandler}
      >
        Signup
      </Button>
    </FormBox>
  );
};

export default Signup;
