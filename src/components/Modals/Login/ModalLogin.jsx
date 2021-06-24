import React, { useEffect, useState } from 'react';
// import apiForgotPass from '../../../service/api/apiForgotPass';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className, message } = props;

  return (
    <div>
      <Modal size="sm" isOpen={isOpen} style={{ fontFamily: 'Poppins' }}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button size="sm" style={style.buttonModal} color="primary" onClick={toggle}>
            OK
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
