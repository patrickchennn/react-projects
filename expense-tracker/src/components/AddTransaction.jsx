import {useState,useRef} from 'react'

const AddTransaction = ({onAdd}) => {

  const [dataForm,setDataForm] = useState({
    id:0,
    title:"",
    amount:"",
    areIncomeOrExpense:""
  })

  const focusTitle = useRef(null)
  const focusAmount = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(dataForm.title.length < 1 ){
      alert("Enter some text")
      focusTitle.current.focus();
      return
    }
    else if(typeof(dataForm.amount)==="string"){
      alert("Enter some number")
      focusAmount.current.focus()
      return
    }
    // add unique id 
    dataForm.id = Date.now()

    // if the amount spend is loss/expense(negative value)
    dataForm.amount<0 ? dataForm.areIncomeOrExpense="my-expense-card" : dataForm.areIncomeOrExpense="my-income-card" 

    onAdd(dataForm)

    setDataForm({
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
          ref={focusTitle}
          value={dataForm.title}
          onChange={e => {
              const newArr = {...dataForm}
              newArr.title=e.target.value
              setDataForm(newArr)
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
          className="form-control" 
          type="number"
          ref={focusAmount}
          value={dataForm.amount}
          onChange={e => {
            const newArr = {...dataForm}
            newArr.amount=Number(e.target.value)
            setDataForm(newArr)
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