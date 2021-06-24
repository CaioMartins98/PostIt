import React, { useEffect, useState } from 'react';
// import apiForgotPass from '../../../service/api/apiForgotPass';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import axios from 'axios';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className, message, url } = props;

  return (
    <div>
      <Modal isOpen={isOpen} className={className}>
        <ModalHeader toggle={toggle}> Recuperação de senha</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          {url && (
            <Button
              style={style.buttonModal}
              color="success"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Confirmar
            </Button>
          )}
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
