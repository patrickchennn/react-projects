import React from 'react'
import {ModalAddTaskForm} from "./ModalAddTaskForm.jsx"

export const Header = ({onAdd}) => {
  return (
    <header className="
      d-flex 
      justify-content-between
      align-items-center
      mb-4">

      <h1>Task Tracker</h1>

      <ModalAddTaskForm
        title="Add Task"
        colorMainBtn="dark"
        modalSize="lg"
        onAdd={onAdd}
      />
      
    </header>
  )
}
