import React from 'react'
import { useEffect,useState} from "react";

import { Header } from "../components/Header.jsx";
import { Tasks } from "../components/Tasks.jsx";
import { Footer } from "../components/Footer.jsx";

const TaskTracker = () => {
  const [dataTasks,setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })
    setTasks(dataTasks.filter(task => task.id !== id));
  }

  // Add Task
  const addTask = async (newTask) => {
    const id = Math.floor(Math.random()*10000)+1
    // add id
    newTask = {id,...newTask}
    console.log(`data to be inserted: ${JSON.stringify(newTask,null,"  ")}`);
    const res = await fetch("http://localhost:5000/tasks",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
    const currTasks = await res.json()
    console.log(`curr data ${JSON.stringify(currTasks,null,"  ")}`)
    setTasks([...dataTasks,currTasks])
  }
  
  return (
    <div className="my-container">
      <Header onAdd={addTask}/>
      {dataTasks.length < 1 ? <h1>nothing in here</h1> : <Tasks onDelete={deleteTask} dataTasks={dataTasks} />
      }
      <Footer />
    </div>
  )
}

export default TaskTracker