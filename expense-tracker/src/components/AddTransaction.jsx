import {useState,useRef} from 'react'

const AddTransaction = ({transactions,setTransactions}) => {

  const [tempTransaction,setTempTransaction] = useState({
    id:0,
    title:"",
    amount:"",
    areIncomeOrExpense:""
  })
  const focusInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(tempTransaction.title.length < 1 || typeof(tempTransaction.amount)==="string"){
      alert("Please fill in the gap before submitting")
      focusInput.current.focus();
      return
    }
      
    // add unique id 
    tempTransaction.id = Date.now()

    // if the amount spend is loss/expense(negative value)
    tempTransaction.amount<0 ? tempTransaction.areIncomeOrExpense="expense-card" : tempTransaction.areIncomeOrExpense="income-card" 

    // // log the data form
    // console.log("data form: ", tempTransaction)
    
    // // log the final data
    // console.log("final data: ", transactions)
    
    setTransactions([...transactions,tempTransaction])

    setTempTransaction({
      id:0,
      title:"",
      amount:"",
      areIncomeOrExpense:""
    })
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
          ref={focusInput}
          value={tempTransaction.title}
          onChange={e => {
              const newArr = {...tempTransaction}
              newArr.title=e.target.value
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
          value={tempTransaction.amount}
          onChange={e => {
            const newArr = {...tempTransaction}
            newArr.amount=Number(e.target.value)
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