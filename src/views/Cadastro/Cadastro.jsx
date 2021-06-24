import React, { useState } from 'react';
import ModalCadastro from '../../components/Modals/Cadastro/ModalCadastro';
//Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, Input, InputLabel, InputAdornment, Button, Grid } from '@material-ui/core';
import {} from '@material-ui/icons';

const Cadastro = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const [message, setMessage] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messageUser, setMessageUser] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState(null);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    const { username, password } = values;

    if (username) setMessageUser(!messageUser);

    if (password) setMessagePassword('');
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      return apiCadastro(username, password);
    }
  };

  const apiCadastro = (username, password) => {
    const URL = 'https://segware-book-api.segware.io/api';

    axios
      .post(`${URL}/sign-up`, {
        username,
        password,
      })
      .then((response) => {
        if (response.status == 200) {
          setMessage('Usuário cadastrado com sucesso!');
          setOpenModal(true);
          setUrl(true);
        }
      })
      .catch(() => {
        setMessage('Falha ao cadastrar usuário, tente novamente!');
        setOpenModal(true);
        setUrl(false);
      });
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
              data-testid="usernameCadastro-field"
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
            <span data-testid="erroCadastro-user" style={{ color: 'red' }}>
              {messageUser}
            </span>

            <InputLabel
              style={{ marginTop: '30px', fontSize: '25px', color: 'white' }}
              htmlFor="standard-adornment-password"
            >
              Senha
            </InputLabel>

            <Input
              data-testid="passwordCadastro-field"
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
                <InputAdornment>
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
            <span data-testid="erroCadastro-password" style={{ color: 'red' }}>
              {messagePassword}
            </span>
          </div>
          {/* <span style={{ color: 'red' }}>{messageError}</span> */}

          <Button
            data-testid="buttonCadastro-field"
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
            onClick={() => validate()}
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

      <ModalCadastro
        url={url}
        message={message}
        isOpen={openModal}
        toggle={() => setOpenModal(!openModal)}
      />
    </div>
  );
};

export default Cadastro;
