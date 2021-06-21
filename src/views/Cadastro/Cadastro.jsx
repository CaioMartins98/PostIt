import React, { useState } from 'react';
import ApiCadastro from '../../service/api/apiCadastro';
//Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

//Styled-Components
import { Button, Container, Grid, Icon } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { BorderRight } from '@material-ui/icons';

const Cadastro = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const [messagePassword, setMessagePassword] = useState('');
  const [messageUser, setMessageUser] = useState('');

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickSignUp = () => {
    const { username, password } = values;
    if (username == '') return setMessageUser('Campo obrigatório*');
    if (password == '') return setMessagePassword('Campo obrigatório*');
    ApiCadastro({ username, password });
  };

  return (
    <div
      style={{
        background: 'black',

        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          display: 'flex',

          fontFamily: 'Pacifico',
        }}
      >
        <h1 style={{ fontSize: '100px', marginTop: '15px', color: 'white' }}>Post</h1>

        <h1 style={{ fontSize: '100px', marginLeft: '15px', marginTop: '15px', color: '#3D4DDB' }}>
          {' '}
          It!
        </h1>
      </div>
      <Grid container style={{ display: 'flex', alingItems: 'center', justifyContent: 'center' }}>
        <Grid
          item
          xs={11}
          sm={10}
          md={8}
          lg={3}
          style={{
            borderRadius: '8px',
            color: 'white',
            fontFamily: 'Poppins',
            width: '35vw',
            height: '70vh',
            marginTop: '55px',
          }}
        >
          <h1
            style={{
              color: 'white',
              fontFamily: 'Poppins',
              fontSize: '40px',
              fontWeight: '700',
              alingItems: 'center',
              justifyContent: 'center',
              display: 'grid',
              paddingTop: 30,
            }}
          >
            {' '}
            Cadastro
          </h1>
          <div
            style={{
              width: '100%',
            }}
          >
            <InputLabel style={{ marginTop: '70px', fontSize: '25px', color: 'white' }}>
              Nome
            </InputLabel>
            <Input
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
            <span style={{ color: 'red' }}>{messageUser}</span>

            <InputLabel
              style={{ marginTop: '30px', fontSize: '25px', color: 'white' }}
              htmlFor="standard-adornment-password"
            >
              Senha
            </InputLabel>

            <Input
              style={{
                background: '#ffffff',
                borderRadius: '4px',
                width: '100%',
                marginTop: '16px',
                marginBottom: '12px',
                fontSize: '30px',
              }}
              required
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="initial">
                  <IconButton
                    style={{ color: '#4e4e4e' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span style={{ color: 'red' }}>{messagePassword}</span>
          </div>
          {/* <span style={{ color: 'red' }}>{messageError}</span> */}

          <Button
            color="primary"
            style={{
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              color: 'white',
              // background: 'green',
              marginTop: '70px',
              fontFamily: 'Poppins',
              fontSize: '20px',
            }}
            variant="contained"
            onClick={() => handleClickSignUp()}
          >
            CADASTRAR
          </Button>

          <div
            style={{
              color: 'gray',
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              marginTop: '50px',
              marginBottom: '36px',
              fontSize: '25px',
            }}
          >
            <h3
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                window.location.href = '/';
              }}
            >
              <ArrowBackIcon style={{ color: 'gray', marginRight: '10px' }} fontSize="small" />
              Voltar
            </h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cadastro;
