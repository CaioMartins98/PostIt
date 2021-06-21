import React, { useState } from 'react';
import ModalForgotPassword from '../../components/Modals/ForgotPassword/ModalForgotPassword';
import apiForgotPass from '../../service/api/apiForgotPass';
//Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';

//Styled-Components
import { Button, Container, Grid } from '@material-ui/core';
const ForgotPassword = () => {
  const [values, setValues] = useState({
    username: '',
    showPassword: false,
  });
  const [modalForgotPassword, setModalForgotPassword] = useState(false);

  const [messageUser, setMessageUser] = useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleForgotPassword = () => {
    const { username } = values;
    if (username == '') return setMessageUser('Campo obrigatório*');

    apiForgotPass({ username });
    // setModalForgotPassword(!modalForgotPassword);
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
        <h1 style={{ marginTop: '15px', color: 'white', fontSize: '100px' }}>Post</h1>

        <h1 style={{ marginLeft: '15px', marginTop: '15px', color: '#3D4DDB', fontSize: '100px' }}>
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
              display: 'flex',
              paddingTop: 50,
            }}
          >
            Recuperar senha
          </h1>

          <div
            style={{
              width: '100%',
              marginTop: '90px',
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
          </div>

          <Button
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

      <ModalForgotPassword
        isOpen={modalForgotPassword}
        toggle={() => setModalForgotPassword(!modalForgotPassword)}
      />
    </div>
  );
};

export default ForgotPassword;
