import { BrowserRouter,Routes, Route } from "react-router-dom"
import MyNavbar from './components/MyNavbar.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Pricing from "./pages/Pricing.jsx"
import TaskTracker from "./pages/TaskTracker.jsx"

import "./styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/task-tracker" element={<TaskTracker />} />
      </Routes>
    </BrowserRouter>
  )
}

// This app was created by following this tutorial:
// https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=4195s