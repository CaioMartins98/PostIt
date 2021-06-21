import React, { useState } from 'react';
import ModalForgotPassword from '../../components/Modals/ForgotPassword/ModalForgotPassword';
const axios = require('axios');

const apiLogin = ({ username }) => {
  const URL = 'https://segware-book-api.segware.io/api';

  axios
    .get(`${URL}/forgot-password/${username}`, {
      username: username,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data.password;
      }
      return 'Usuário não existe, tente novamente!';
    });
};

export default apiLogin;
