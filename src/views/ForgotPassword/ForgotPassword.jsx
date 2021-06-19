import React, { useState } from 'react';
import apiForgotPass from '../../service/api/apiForgotPass';
//Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';

//Styled-Components
import { Button, Container } from '@material-ui/core';
const ForgotPassword = () => {
  const [values, setValues] = useState({
    username: '',
    showPassword: false,
  });

  const [messageUser, setMessageUser] = useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleForgotPassword = () => {
    const { username } = values;
    if (username == '') return setMessageUser('Campo obrigatório*');

    apiForgotPass({ username });
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
          fontSize: '90px',
          fontFamily: 'Pacifico',
        }}
      >
        <h1 style={{ marginTop: '15px', color: 'white' }}>Post</h1>

        <h1 style={{ marginLeft: '15px', marginTop: '15px', color: '#3D4DDB' }}> It!</h1>
      </div>
      <Container
        style={{
          background: '#f1f1f1',
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
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: '40px',
            fontWeight: '700',
            alingItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            paddingTop: 50,
          }}
        >
          Recuperar
        </h1>
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
          Senha
        </h1>
        <div
          style={{
            width: '100%',
            marginTop: '90px',
          }}
        >
          <InputLabel style={{ marginTop: '70px', fontSize: '25px' }}>Nome</InputLabel>
          <Input
            style={{ width: '100%', fontSize: '30px', marginBottom: '12px' }}
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
              window.location.href = 'http://localhost:3000/';
            }}
          >
            <ArrowBackIcon style={{ color: 'gray', marginRight: '10px' }} fontSize="small" />
            Voltar
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
