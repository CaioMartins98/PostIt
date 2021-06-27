import React from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalForgotPassword = (props) => {
  const { isOpen, toggle, className, message, url } = props;
  const history = useHistory();
  return (
    <div>
      <Modal style={{ fontFamily: 'Poppins' }} size="sm" isOpen={isOpen} className={className}>
        <ModalHeader>Recuperação de senha</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          {url ? (
            <Button
              style={style.buttonModal}
              color="success"
              onClick={() => {
                history.push('/');
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
