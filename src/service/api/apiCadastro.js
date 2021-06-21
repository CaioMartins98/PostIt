import React, { useState } from 'react';

const axios = require('axios');

const apiLogin = ({ username, password }) => {
  const URL = 'https://segware-book-api.segware.io/api';

  // const jwt = (res) => localStorage.setItem('JWT', res.data);
  // const getJwt = localStorage.getItem('JWT');
  axios
    .post(`${URL}/sign-up`, {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.status == 200) {
        alert('Usuário cadastrado com sucesso!');
        return (window.location.href = '/');
      }
    })
    .catch((err) => {
      if (err.status !== 200) {
        return alert('Usuário já cadastrado!');
      }
    });
};

export default apiLogin;
