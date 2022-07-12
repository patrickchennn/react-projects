import {useState} from 'react'
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowBalance from './components/ShowBalance.jsx'
import HistoryTransaction from './components/HistoryTransaction.jsx'
import AddTransaction from './components/AddTransaction.jsx'

const App = () => {

  const [transactions,setTransactions] = useState([
    {
      id:1,
      title:"buy a dog",
      amount:-1500,
      areIncomeOrExpense:"expense-card"
    },
    {
      id:2,
      title:"sell a cat",
      amount:2000,
      areIncomeOrExpense:"income-card"
    },
    {
      id:7,
      title:"sell a table",
      amount:2000,
      areIncomeOrExpense:"income-card"
    }
  ])

  const deleteHistoryTransaction = (id) => {
    console.log("delete this ",id);
    const filtered = transactions.filter(transaction => transaction.id !== id)
    setTransactions(filtered)
  }

  return (
    <div className='my-container'>
      <h1 className='d-flex justify-content-center'>Expense Tracker</h1>
      <ShowBalance transactions={transactions}/>
      <HistoryTransaction 
        transactions={transactions}
        onDelete={deleteHistoryTransaction}/>
      <AddTransaction transactions={transactions} setTransactions={setTransactions}/>
    </div>
  )
}

export default App
