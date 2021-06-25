import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className, message, url } = props;

  return (
    <div>
      <Modal size="sm" isOpen={isOpen} className={className}>
        <ModalHeader>Recuperação de senha</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          {url ? (
            <Button
              style={style.buttonModal}
              color="success"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Confirmar
            </Button>
          ) : (
            <Button style={style.buttonModal} color="primary" onClick={toggle}>
              OK
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
