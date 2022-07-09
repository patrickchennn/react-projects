import React,{useState} from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import { MyDatePicker } from "./MyDatePicker";

export const AddTaskForm = ({closeModal,onAdd}) => {
  const [activity, setActivity] = useState("")
  // const [{day,date,month,year,time}, setWhen] = useState({})
  const [when, setWhen] = useState(undefined)

  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // if the user did not do anything with the activity section, return
    if(activity.length < 1 ){
      alert("Please insert a text on activity section before submitting.")
      return
    }
    // if the remainder is false(not checked), return
    if(!reminder){
      alert(`Please tick the "Check me out" to ensure the data to be inserted.`)
      return
    }
    onAdd({activity,when})
    setActivity("")
    setWhen(undefined)
    setReminder(false)
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label >Activity</Form.Label>
          <Form.Control 
            placeholder="Ex:playing basketball" 
            className="mt-0"
            value={activity}
            onChange={e => {
              setActivity(e.target.value)
              console.log(activity);
            }}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <MyDatePicker setWhen={setWhen} />
          {console.log(when)}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            value={reminder}
            onChange={e => {
              setReminder(e.target.checked)
              console.log(e.target.checked);
            }}/>
        </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button 
            type="submit" 
            variant="success" 
            onClick={closeModal}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  )
}
