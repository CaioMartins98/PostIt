import React, { useEffect, useState } from 'react';
// import apiForgotPass from '../../../service/api/apiForgotPass';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className, message, url } = props;

  return (
    <div>
      <Modal toggle={toggle} size="sm" isOpen={isOpen} className={className}>
        <ModalHeader>Recuperação de senha</ModalHeader>
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
