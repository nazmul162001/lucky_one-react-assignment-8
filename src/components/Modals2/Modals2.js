import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const Modals2 = ({show2, setShow2}) => {

  const removeFunc = () => {
    setShow2(false)
  }

  return (
    <Modal show={show2} animation={false}>
        <Modal.Header>
          <Modal.Title>Maximum added</Modal.Title>
        </Modal.Header>
        <Modal.Body>You can not adde more than 4 employe.</Modal.Body>
        <Modal.Footer>
          <Button onClick = { removeFunc} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default Modals2;