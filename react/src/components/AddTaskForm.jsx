import React,{useState} from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import { MyDatePicker } from "./MyDatePicker";

export const AddTaskForm = ({closeModal}) => {

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label >Activity</Form.Label>
          <Form.Control placeholder="Ex:playing basketball" className="mt-0"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <MyDatePicker />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button type="submit" variant="success" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  )
}
