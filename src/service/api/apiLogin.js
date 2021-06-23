import React, { useState } from 'react';

const axios = require('axios');

const apiLogin = ({ username, password }) => {
  const URL = 'https://segware-book-api.segware.io/api';

  // const jwt = (res) => localStorage.setItem('JWT', res.data);
  // const getJwt = localStorage.getItem('JWT');
  axios
    .post(`${URL}/sign-in`, {
      username: username,
      password: password,
    })
    .then((response) => {
      localStorage.setItem('token', response.data);

      if (response.status == 200) {
        return (window.location.href = '/dashboard');
      }
    });
};

export default apiLogin;
