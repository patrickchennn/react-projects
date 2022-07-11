import {useState,createContext} from 'react'
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowBalance from './components/ShowBalance.jsx'
import HistoryTransaction from './components/HistoryTransaction.jsx'
import AddTransaction from './components/AddTransaction.jsx'

export const AppContext = createContext(null)

const App = () => {

  const [transactions,setTransactions] = useState([
    ["buy a dog",-1200,"expense-card"],
    ["sell a cat",2000,"income-card"]
  ])

  return (
    <div className='my-container'>
      <h1 className='d-flex justify-content-center'>Expense Tracker</h1>
      <AppContext.Provider value={{
          transactions,
          setTransactions
        }}>
        <ShowBalance />
        <HistoryTransaction/>
        <AddTransaction/>
      </AppContext.Provider>
    </div>
  )
}

export default App
