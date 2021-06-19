import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
const axios = require('axios');

const apiLogin = ({ username }) => {
  const URL = 'https://segware-book-api.segware.io/api';

  // const jwt = (res) => localStorage.setItem('JWT', res.data);
  // const getJwt = localStorage.getItem('JWT');
  axios
    .get(`${URL}/forgot-password/${username}`, {
      username: username,
    })
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        alert(`Sua senha é : ${response.data.password}`);
        return (window.location.href = 'http://localhost:3000/');
      }
      alert('Usuário não existe, tente novamente!');
    });
};

export default apiLogin;
