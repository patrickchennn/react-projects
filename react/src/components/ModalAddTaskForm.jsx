import React,{useState} from 'react'
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import {AddTaskForm} from "./AddTaskForm.jsx"

export const ModalAddTaskForm = ({title,colorMainBtn,bodyMsg,modalSize}) => {
  // close the modal by default
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  return (
    <div className='modal-container'>
      {/* if this button is clicked, show the modal */}
      <Button variant={colorMainBtn} onClick={showModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" clasName="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
      </Button>

      <Modal show={show} onHide={closeModal} size={modalSize}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddTaskForm closeModal={closeModal}/>
        </Modal.Body>

      </Modal>
    </div>
  )
}
