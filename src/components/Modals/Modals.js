import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const Modals = ({show, setShow}) => {

  const removeFunc = () => {
    setShow(false)
  }

  return (
    <Modal show={show} animation={false}>
        <Modal.Header>
          <Modal.Title>Already Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>You already added this employe.</Modal.Body>
        <Modal.Footer>
          <Button onClick = { removeFunc} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default Modals;