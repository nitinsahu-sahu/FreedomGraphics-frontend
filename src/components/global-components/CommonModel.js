import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CommonModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} size={props.size}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {
          props.buttons ? props.buttons.map((btn, index) =>
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ) :
            <Button variant="primary">
              Save Changes
            </Button>
        }
      </Modal.Footer>
    </Modal>
  )
}

export default CommonModal 