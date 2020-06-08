import React, { useEffect, useState } from 'react';

import FormBox from '../../hoc/FormBox';
import Spinner from '../../components/UI/Spinner ';
import axios from '../../Axios/myInstance';

const ActivateUser = (props) => {
  const { location } = props;

  const [message, setMessage] = useState({
    error: '',
    success: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { pathname, search } = location;
    if (search.length > 0) {
      setLoading(true);
      axios
        .get(`${pathname}${search}`)
        .then((response) => {
          setLoading(false);
          console.log(response);
          if (response && response.data) {
            setMessage({
              error: '',
              success: response.data.message
            });
          }
        })
        .catch((error) => {
          setLoading(false);

          console.log(error);
          if (error && error.response && error.response.data) {
            setMessage({
              success: '',
              error: error.response.data.message
            });
          }
        });
    }
  }, []);

  let content = <Spinner />;
  if (!loading) {
    content = (
      <FormBox>
        {message.success.length > 0 ? (
          <p style={{ color: 'green' }}>{message.success}</p>
        ) : null}
        {message.error.length > 0 ? (
          <p style={{ color: 'red' }}>{message.error}</p>
        ) : null}
      </FormBox>
    );
  }

  return content;
};

export default ActivateUser;
