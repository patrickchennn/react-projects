import React from 'react'
import {ModalAddTaskForm} from "./ModalAddTaskForm.jsx"

export const Header = () => {
  return (
    <header className='my-header'>

      <h1>Task Tracker</h1>

      <ModalAddTaskForm 
        title="Add Task"
        colorMainBtn="dark"
        modalSize="lg"
      />
      
    </header>
  )
}
