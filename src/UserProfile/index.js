import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import checkValidity from '../Utilities/FormValidation';
import Input from '../Input';
import FormBox from '../hoc/FormBox';
import updateObject from '../Utilities/updateObject';
import axios from '../Axios/myInstance';

import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  const { token } = props;

  const [profileForm, setProfileForm] = useState({
    firstName: {
      elementConfig: {
        type: 'text',
        name: 'firstName',
        placeholder: 'Your First Name'
      },
      label: 'First Name',
      value: '',
      validation: {
        isCharOnly: true
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
        isCharOnly: true
      },
      valid: true,
      touched: false
    },
    contact: {
      elementConfig: {
        type: 'text',
        name: 'phoneNumber',
        placeholder: 'Your Phone Number'
      },
      label: 'Phone Number',
      value: '',
      validation: {
        isPhoneNumber: true
      },
      valid: true,
      touched: false
    }
  });
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get('/customer/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        if (response.data.data)
          setProfile({ ...response.data.data, isActive: 'true' });
      })
      .catch((err) => {
        console.log(err);
        let errorMessage = 'Something went wrong!!';
        if (err && err.response && err.response.data) {
          errorMessage = err.response.data.message;
        }
        setError(errorMessage);
      });
  }, []);

  const updateProfileHandler = () => {
    setUpdateMode((state) => !state);
  };

  const inputChangeHandler = (event, fieldname) => {
    const newFieldValue = updateObject(profileForm[fieldname], {
      value: event.target.value,
      touched: true,
      valid:
        event.target.value === '' ||
        checkValidity(event.target.value, profileForm[fieldname].validation)
    });

    const newprofileForm = updateObject(profileForm, {
      [fieldname]: newFieldValue
    });

    let formValid = true;
    Object.keys(profileForm).forEach((field) => {
      formValid = formValid && newprofileForm[field].valid;
    });
    setProfileForm(newprofileForm);
    setFormIsValid(formValid);
  };

  let profileDetails = null;
  let profileElements = null;

  if (!updateMode) {
    if (Object.keys(profile).length > 0) {
      profileDetails = Object.keys(profile).map((key) => {
        if (key !== 'image')
          return (
            <tr>
              <td className={classes.Label}>{key}</td>
              <td className={classes.Value}>{profile[key]}</td>
            </tr>
          );
      });
    }
  } else {
    profileElements = Object.keys(profileForm).map((field) => {
      return (
        <Input
          key={field}
          {...profileForm[field]}
          changed={(event) => {
            inputChangeHandler(event, field);
          }}
        />
      );
    });
  }

  const submitHandler = () => {
    console.log('profile update submitted');
    const data = {};
    Object.keys(profileForm).forEach((key) => {
      if (profileForm[key].value !== '') {
        if (profileForm[key].value !== profile[key]) {
          data[key] = profileForm[key].value;
        }
      }
    });
    if (Object.keys(data).length > 0) {
      axios
        .patch('/customer/profile', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response);
          setProfile((state) => {
            return {
              ...state,
              ...data
            };
          });
          setUpdateMode((state) => !state);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          if (err && err.response && err.response.data) {
            setError(err.response.data.message);
          }
        });
    } else setUpdateMode((state) => !state);
  };

  const imageChangeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const imageUpdateHandler = () => {
    console.log('clicked');
    const data = new FormData();
    data.append('file', image);
    axios
      .post('/user/image', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        setError(null);
      })
      .catch((err) => {
        console.log(err.response);
        let errorMessage = 'Something went wrong';
        if (error && error.response && error.response.data) {
          errorMessage = error.response.data.message;
        }
        setError(errorMessage);
      });
  };

  let content = (
    <div className={classes.UserProfile}>
      <h1 className={classes.Header}>Your Profile</h1>
      {error ? <p>{error}</p> : null}
      <div className={classes.Container}>
        <div className={classes.Image}>
          <img src={profile.image} alt="profile" />
          <form id="image">
            <input type="file" onChange={imageChangeHandler} />
            <Button
              variant="success"
              className={classes.Button}
              onClick={imageUpdateHandler}
            >
              Update Image
            </Button>
          </form>
        </div>
        <table className={classes.Table}>{profileDetails}</table>
      </div>
      <Button
        variant="success"
        className={classes.Button}
        onClick={updateProfileHandler}
      >
        Update Profile
      </Button>
    </div>
  );

  if (updateMode) {
    content = (
      <FormBox>
        <h1>Update Profile</h1>
        {error ? <p>{error}</p> : null}
        {profileElements}
        <Button
          variant="success"
          onClick={submitHandler}
          className={classes.Button}
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </FormBox>
    );
  }

  return content;
};

const mapStateToProps = (state) => {
  return {
    token: state.login.accessToken
  };
};

export default connect(mapStateToProps)(UserProfile);
