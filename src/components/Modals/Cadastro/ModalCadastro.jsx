import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalCadastro = (props) => {
  const { isOpen, className, message, url, toggle } = props;
  const history = useHistory();
  return (
    <div>
      <Modal style={{ fontFamily: 'Poppins' }} isOpen={isOpen} className={className}>
        <ModalHeader>Cadastro</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          {url ? (
            <Button style={style.buttonModal} color="success" onClick={() => history.push('/')}>
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

export default ModalCadastro;
