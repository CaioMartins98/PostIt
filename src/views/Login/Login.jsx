import React, { useEffect, useState } from 'react';
import apiLogin from '../../service/api/apiLogin';
//Material-UI
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Grid, Link } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';

// import styled from "styled-components";
function LoginScreen(props) {
  const [messagePassword, setMessagePassword] = useState('');
  const [messageUser, setMessageUser] = useState('');
  const [messageError, setMessageError] = useState('');
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const history = useHistory();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    const { username, password } = values;
    setValues({ ...values, [prop]: event.target.value });

    if (username) setMessageUser(!messageUser);

    if (password) setMessagePassword('');
  };

  const validate = () => {
    const { username, password } = values;
    apiLogin({ username, password });

    if (username == '' || username == undefined || username == null) {
      setMessageUser('Campo de usuário obrigatório*');
    }
    if (password == '' || password == undefined || password == null) {
      setMessagePassword('Campo de senha obrigatório*');
    }

    return;
  };

  return (
    <div
      style={{
        alingItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100%',
      }}
    >
      <Header />
      <Grid container style={{ display: 'flex', alingItems: 'center', justifyContent: 'center' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{
            color: 'white',
            fontFamily: 'Poppins',
            width: '30vw',
            marginTop: '15vh',
            minWidth: '20vw',
            marginLeft: '-10vw',
            height: '600px',
          }}
        >
          <h1
            style={{
              color: 'black',
              fontFamily: 'Poppins',
              fontSize: '40px',
              fontWeight: '700',
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {' '}
            Bem-Vindo!
          </h1>
          <div
            style={{
              width: '100%',
            }}
          >
            <InputLabel style={{ marginTop: '100px', fontSize: '25px' }}>Nome</InputLabel>

            <Input
              data-testid="username-field"
              style={{ width: '100%', fontSize: '30px', marginBottom: '12px' }}
              required
              value={values.username}
              onChange={handleChange('username')}
            />

            <span data-testid="erro-user" style={{ color: 'red' }}>
              {messageUser}
            </span>
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

          <div
            style={{
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              marginTop: '25px',
              marginBottom: '36px',
              fontSize: '25px',
            }}
          >
            <Link
              style={{
                outline: 'none',

                cursor: 'pointer',
              }}
              onClick={() => {
                window.location.href = '/cadastro';
              }}
            >
              Cadastre-se
            </Link>
          </div>
          <div
            style={{
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: '18px',
            }}
          >
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginScreen;
