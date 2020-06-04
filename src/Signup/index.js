import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import Input from '../Input';
import updateObject from '../Utilities/updateObject';
import checkValidity from '../Utilities/FormValidation';
import classes from './Signup.module.css';

const Signup = () => {
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
      isValid: true,
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
        validPassword: true
      },
      isValid: true,
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
      isValid: true,
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
      isValid: true,
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
      isValid: true,
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
      isValid: true,
      touched: false
    }
  });

  const [formIsValid, setFormIsValid] = useState(false);

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
      })
      .catch((error) => {
        console.log(error);
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
    <div className={classes.SignupForm}>
      <h1>Signup</h1>
      <form>{formElements}</form>
      <Button
        variant="success"
        disabled={!formIsValid}
        active={formIsValid}
        onClick={submitHandler}
      >
        Signup
      </Button>
    </div>
  );
};

export default Signup;
