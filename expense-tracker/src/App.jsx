import { useReducer } from 'react'
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import IncomeExpenseBalance from './components/IncomeExpenseBalance.jsx'
import HistoryTransaction from './components/HistoryTransaction.jsx'
import AddTransaction from './components/AddTransaction.jsx'
import Header from './components/Header.jsx'
import { GlobalContext } from './context/GlobalState.jsx'
import AppReducer from "./context/AppReducer.jsx"

const App = () => {
  const [state,dispatch] = useReducer(AppReducer, {
    transactions: [
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
  })

  const deleteHistoryTransaction = (id) => {
    dispatch({
      type:"DELETE_HISTORY_TRANSACTION",
      payload: id
    })
    // console.log("delete this ",id);
    // const filtered = transactions.filter(transaction => transaction.id !== id)
    // setTransactions(filtered)
  }

  return (
    <GlobalContext.Provider value={{transactions:state.transactions}}>
      <Header />
      <div className='my-container'>
        <IncomeExpenseBalance/>
        <HistoryTransaction onDelete={deleteHistoryTransaction}/>
        <AddTransaction  />
      </div>
    </GlobalContext.Provider>
  )
}

export default App