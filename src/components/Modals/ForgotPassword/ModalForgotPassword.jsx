import React, { useEffect, useState } from 'react';
// import apiForgotPass from '../../../service/api/apiForgotPass';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import axios from 'axios';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className } = props;
  const [password, setPassword] = useState('');

  const apiForgotPass = ({ username }) => {
    const URL = 'https://segware-book-api.segware.io/api';

    axios
      .get(`${URL}/forgot-password/${username}`, {
        username: username,
      })
      // .then((res) => {
      //   return res;
      // })
      .then((response) => {
        const senha = response.data.password;

        if (response.status == 200) {
          setPassword(senha);
        }
        return 'Usuário não existe, tente novamente!';
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div>
      <Modal isOpen={isOpen} className={className}>
        <ModalHeader>Recuperação de senha</ModalHeader>
        <ModalBody>Sua senha é: {password}</ModalBody>
        <ModalFooter>
          <Button
            style={style.buttonModal}
            color="success"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Confirmar
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

const style = {
  buttonModal: {
    width: '100%',
  },
};

export default ModalForgotPassword;
