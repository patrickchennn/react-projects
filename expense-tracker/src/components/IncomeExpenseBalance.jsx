import {useContext} from "react"
import { GlobalContext } from '../context/GlobalState.jsx'
import IncomeExpenses from "./IncomeExpenses.jsx"
import Balance from './Balance.jsx'

const IncomeExpenseBalance = () => {
  const {transactions} = useContext(GlobalContext)
  // console.log(transactions)

  let income=0,expense=0,totalMoney=0
  transactions.forEach(transaction => {
    totalMoney += transaction.amount
    transaction.areIncomeOrExpense==="my-income-card" ? income+=transaction.amount : expense += transaction.amount
  })
  // console.log(income,expense,totalMoney);

  return (
    <div className='mt-5'>
      <Balance totalMoney={totalMoney}/>
      <IncomeExpenses income={income} expense={expense}/>
    </div>
  )
}

export default IncomeExpenseBalance