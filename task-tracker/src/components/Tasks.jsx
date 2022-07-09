import React from 'react'
import { Task } from './Task.jsx';

export const Tasks = ({onDelete,dataTasks}) => {
  return (
    <main>
      {dataTasks.map(task => (
          <Task task={task} onDelete={onDelete}/>
        )
      )}
    </main>
  )
}
