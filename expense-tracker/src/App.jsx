import { useReducer } from 'react'
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import IncomeExpenseBalance from './components/IncomeExpenseBalance.jsx'
import HistoryTransactions from './components/HistoryTransactions.jsx'
import AddTransaction from './components/AddTransaction.jsx'
import Header from './components/Header.jsx'
import { GlobalContext } from './context/GlobalState.jsx'
import AppReducer from "./context/AppReducer.jsx"

const App = () => {
  const initialTransactions = [
    {
      id:1,
      title:"buy a dog",
      amount:-1500,
      areIncomeOrExpense:"my-expense-card"
    },
    {
      id:2,
      title:"sell a cat",
      amount:2000,
      areIncomeOrExpense:"my-income-card"
    },
    {
      id:7,
      title:"sell a table",
      amount:2000,
      areIncomeOrExpense:"my-income-card"
    }
  ]

  const [transactions,dispatch] = useReducer(AppReducer,initialTransactions)

  const deleteHistoryTransaction = (id) => {
    console.log("delete this",id);
    dispatch({
      type:"DELETE_HISTORY_TRANSACTION",
      payload: id
    })
  }

  const addTransaction = (newTransaction) => {
    console.log("new data to be inserted: ", newTransaction);
    dispatch({
      type:"ADD_TRANSACTION",
      newTransaction
    })
  }

  return (
    <GlobalContext.Provider value={{transactions}}>
      <Header />
      <div className='my-container'>
        <IncomeExpenseBalance/>
        <HistoryTransactions onDelete={deleteHistoryTransaction}/>
        <AddTransaction  onAdd={addTransaction}/>
      </div>
    </GlobalContext.Provider>
  )
}

export default App