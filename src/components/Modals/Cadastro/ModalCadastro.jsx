import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import axios from 'axios';
const ModalCadastro = (props) => {
  const { isOpen, className, message, url } = props;

  return (
    <div>
      <Modal isOpen={isOpen} className={className}>
        <ModalHeader>Cadastro</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          {url && (
            <Button
              style={style.buttonModal}
              color="success"
              onClick={() => (window.location.href = '/')}
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

export default ModalCadastro;
