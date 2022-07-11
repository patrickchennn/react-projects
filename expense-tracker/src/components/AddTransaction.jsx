import React,{useContext,useState} from 'react'
import { AppContext } from '../App.jsx'

const AddTransaction = () => {

  const {transactions,setTransactions} = useContext(AppContext)
  // current transaction data
  const [tempTransaction,setTempTransaction] = useState(["",undefined,undefined])

  // console.log(tempTransaction);
  const handleSubmit = (e) => {

    // if the amount spend is loss/expense(negative value)
    (tempTransaction[1]<0) ? tempTransaction[2]="expense-card" : tempTransaction[2]="income-card" 

    // log the final computed data form
    console.log(tempTransaction)

    setTransactions([...transactions,tempTransaction])
    // log the final data
    console.log(transactions)

    e.preventDefault()
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <h4>Add new transaction</h4>
      <hr />

      <div className="mb-3">
        <label htmlFor="name-transaction" className="form-label">Transaction</label>
        <input 
          id="name-transaction" 
          className="form-control" 
          type="text" 
          value={tempTransaction[0]}
          onChange={e => {
              const newArr = [...tempTransaction]
              newArr[0]=e.target.value
              setTempTransaction(newArr)
            }
          } 
          placeholder='Enter text...'/>
      </div>

      <div className="mb-3">
        <label htmlFor="trasaction-amount" className="form-label">
          Amount
          (negative - expense, positive - income)
        </label>
        <input 
          id="trasaction-amount" 
          type="number" 
          className="form-control" 
          value={tempTransaction[1]}
          onChange={e => {
            const newArr = [...tempTransaction]
            newArr[1]=e.target.value
            setTempTransaction(newArr)
          }
        }  
          placeholder='Enter amount...'/>
      </div>

      <button type='submit' className='btn w-100' 
        style={{
          backgroundColor:"#e0cffc"
        }}>
        Add Transaction
      </button>
    </form>
  )
}

export default AddTransaction