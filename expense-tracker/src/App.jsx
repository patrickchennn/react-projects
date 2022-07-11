import React from 'react'
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import Balance from './components/Balance.jsx'
import HistoryTranscation from './components/HistoryTranscation.jsx'
import AddTranscation from './components/AddTranscation.jsx'
const App = () => {
  return (
    <div className='my-container'>
      <h1 className='d-flex justify-content-center'>Expense Tracker</h1>


      <Balance />
      <HistoryTranscation/>
      <AddTranscation/>
    </div>
  )
}

export default App