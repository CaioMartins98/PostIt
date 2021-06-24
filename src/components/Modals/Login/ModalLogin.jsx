import React, { useEffect, useState } from 'react';
// import apiForgotPass from '../../../service/api/apiForgotPass';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className, message } = props;

  return (
    <div>
      <Modal toggle={toggle} size="sm" isOpen={isOpen}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button style={style.buttonModal} color="success" onClick={toggle}>
            Confirmar
          </Button>
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
