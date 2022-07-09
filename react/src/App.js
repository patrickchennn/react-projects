import { useEffect,useState} from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export default function App() {
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
      <Tasks onDelete={deleteTask} dataTasks={dataTasks} />
    </div>
  );
}
