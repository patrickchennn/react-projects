import React from 'react'

const AddTranscation = () => {
  return (
    <form className="mt-5">
      <h4>Add new transaction</h4>
      <hr />

      <div className="mb-3">
        <label for="name-transaction" className="form-label">Transaction</label>
        <input type="text" className="form-control" id="name-transaction" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Amount
          (negative - expense, positive - income)
        </label>
        <input type="number" className="form-control" id="exampleInputPassword1" />
      </div>
      <button className='btn w-100' 
        style={{
          backgroundColor:"#e0cffc"
        }}>
        Add Transaction
      </button>
    </form>
  )
}

export default AddTranscation