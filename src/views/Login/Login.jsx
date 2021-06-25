import React, { useEffect, useState } from 'react';
import ModalLogin from '../../components/Modals/Login/ModalLogin';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Button, Link, IconButton, Input, InputLabel, InputAdornment } from '@material-ui/core';

import Header from '../../components/Header/Header';

import axios from 'axios';

import {
  ErrorField,
  GridContainer,
  GridLoginField,
  LinkCadastroContainer,
  LinkField,
  LinkForgotPassContainer,
  MainContainer,
} from './styles';

function LoginScreen(props) {
  const [messagePassword, setMessagePassword] = useState('');
  const [messageUser, setMessageUser] = useState('');
  const [message, setMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const apiLogin = (username, password) => {
    const URL = 'https://segware-book-api.segware.io/api';

    axios
      .post(`${URL}/sign-in`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data);

        if (response.status == 200) {
          return (window.location.href = '/dashboard');
        }
      })
      .catch(() => {
        setMessage('Insira um usuário válido!');
        setOpenModal(true);
      });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    const { username, password } = values;
    setValues({ ...values, [prop]: event.target.value });

    if (username) setMessageUser(!messageUser);

    if (password) setMessagePassword(!messagePassword);
  };

  const validate = () => {
    const { username, password } = values;

    if (username == '' && password === '') {
      setMessageUser('Campo de usuário obrigatório*');
      setMessagePassword('Campo de senha obrigatório*');
      return;
    } else if (username == '') {
      return setMessageUser('Campo de usuário obrigatório*');
    } else if (password == '') {
      return setMessagePassword('Campo de senha obrigatório*');
    } else {
      apiLogin(username, password);
    }
  };

  return (
    <MainContainer>
      <Header />
      <GridContainer container>
        <GridLoginField item xs={12} sm={12} md={12} lg={10}>
          <h1> Bem-Vindo!</h1>
          <div style={{}}>
            <InputLabel style={{ marginTop: '100px', fontSize: '25px' }}>Nome</InputLabel>

            <Input
              data-testid="username-field"
              style={{ width: '100%', fontSize: '30px', marginBottom: '12px' }}
              required
              value={values.username}
              onChange={handleChange('username')}
            />

            <ErrorField data-testid="erro-user" style={{ color: 'red' }}>
              {messageUser}
            </ErrorField>
            <InputLabel
              style={{ marginTop: '30px', fontSize: '25px' }}
              htmlFor="standard-adornment-password"
            >
              Senha
            </InputLabel>
            <Input
              data-testid="password-field"
              style={{ width: '100%', marginBottom: '12px', fontSize: '30px' }}
              required
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span data-testid="erro-password" style={{ color: 'red' }}>
              {messagePassword}
            </span>
          </div>

          <Button
            data-testid="buttonLogin-field"
            style={{
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              width: '100%',

              marginTop: '50px',
              fontFamily: 'Poppins',
              fontSize: '20px',
            }}
            variant="contained"
            color="primary"
            onClick={() => validate()}
          >
            ENTRAR
          </Button>

          <LinkCadastroContainer>
            <LinkField
              onClick={() => {
                window.location.href = '/cadastro';
              }}
            >
              Cadastre-se
            </LinkField>
          </LinkCadastroContainer>
          <LinkForgotPassContainer>
            <Link
              style={{
                marginTop: '0px',

                cursor: 'pointer',
              }}
              onClick={() => {
                window.location.href = '/recuperar-senha';
              }}
            >
              Esqueci minha senha
            </Link>
          </LinkForgotPassContainer>
        </GridLoginField>
      </GridContainer>

      <ModalLogin
        username={values.username}
        password={values.password}
        isOpen={openModal}
        message={message}
        toggle={() => setOpenModal(!openModal)}
      />
    </MainContainer>
  );
}

export default LoginScreen;
