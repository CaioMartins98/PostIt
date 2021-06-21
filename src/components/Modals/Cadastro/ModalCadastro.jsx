import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalCadastro = (props) => {
  const { isOpen, toggle, className } = props;

  return (
    <div>
      <Modal isOpen={isOpen} className={className}>
        <ModalHeader>Cadastro</ModalHeader>
        <ModalBody>Usuário Cadastrado com sucesso!</ModalBody>
        <ModalFooter>
          <Button
            style={style.buttonModal}
            color="success"
            onClick={() => (window.location.href = '/')}
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

export default ModalCadastro;
