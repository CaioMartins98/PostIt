import React, { useState } from 'react';
import ModalForgotPassword from '../../components/Modals/ForgotPassword/ModalForgotPassword';

import axios from 'axios';
//Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';

//Styled-Components
import { Button } from '@material-ui/core';

import {
  BackContainer,
  FieldsContainer,
  GridContainer,
  GridForgotPassContainer,
  HeaderContainer,
  MainContainer,
} from './styles';
import { ErrorField } from '../Login/styles';
const ForgotPassword = () => {
  const [values, setValues] = useState({
    username: '',
    showPassword: false,
  });
  const [modalForgotPassword, setModalForgotPassword] = useState(false);
  const [url, setUrl] = useState(null);

  const [message, setMessage] = useState('');
  const [messageUser, setMessageUser] = useState('');

  const handleChange = (prop) => (event) => {
    const { username } = values;
    if (username) setMessageUser(!messageUser);

    setValues({ ...values, [prop]: event.target.value });
  };

  const handleForgotPassword = () => {
    const { username } = values;
    if (username === '') {
      setMessageUser('Campo obrigatório*');
    }

    apiForgotPass(username);
  };

  const apiForgotPass = (username) => {
    const URL = 'https://segware-book-api.segware.io/api';

    axios
      .get(`${URL}/forgot-password/${username}`, {
        username,
      })
      .then((response) => {
        const senha = response.data.password;

        if (response.status === 200) {
          setMessage(`Sua senha é: ${senha}`);
          setModalForgotPassword(true);
          setUrl(true);
        } else if (response.status === 204) {
          setMessage('Insira um usuário válido!');
          setModalForgotPassword(true);
          setUrl(false);
        }
      })
      .catch(() => {
        setMessage('Erro, tente novamente!');
        setModalForgotPassword(false);
        setUrl(false);
      });
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <h1 style={{ marginTop: '15px', color: 'white', fontSize: '100px' }}>Post</h1>

        <h1 style={{ marginLeft: '15px', marginTop: '15px', color: '#3D4DDB', fontSize: '100px' }}>
          {' '}
          It!
        </h1>
      </HeaderContainer>
      <GridContainer container>
        <GridForgotPassContainer item xs={11} sm={10} md={8} lg={3}>
          <h1
            style={{
              color: 'white',
              fontFamily: 'Poppins',
              fontSize: '40px',
              fontWeight: '700',
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              paddingTop: 50,
            }}
          >
            Recuperar senha
          </h1>

          <FieldsContainer>
            <InputLabel style={{ marginTop: '70px', fontSize: '25px', color: 'white' }}>
              Nome
            </InputLabel>
            <Input
              data-testid="username-forgot"
              style={{
                background: '#ffff',
                borderRadius: '4px',
                width: '100%',
                fontSize: '30px',
                marginTop: '16px',
                marginBottom: '12px',
              }}
              required
              value={values.username}
              onChange={handleChange('username')}
            />
            <ErrorField data-testid="erroForgot-username" style={{ color: 'red' }}>
              {messageUser}
            </ErrorField>
          </FieldsContainer>

          <Button
            data-testid="buttonForgot-field"
            color="primary"
            style={{
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              color: 'white',
              // background: 'green',
              marginTop: '100px',
              fontFamily: 'Poppins',
              fontSize: '20px',
            }}
            variant="contained"
            onClick={() => handleForgotPassword()}
          >
            RECUPERAR SENHA
          </Button>

          <BackContainer>
            <h3
              onClick={() => {
                window.location.href = '/';
              }}
            >
              <ArrowBackIcon style={{ color: 'gray', marginRight: '10px' }} fontSize="small" />
              Voltar
            </h3>
          </BackContainer>
        </GridForgotPassContainer>
      </GridContainer>

      <ModalForgotPassword
        url={url}
        message={message}
        username={values.username}
        isOpen={modalForgotPassword}
        toggle={() => setModalForgotPassword(!modalForgotPassword)}
      />
    </MainContainer>
  );
};

export default ForgotPassword;
