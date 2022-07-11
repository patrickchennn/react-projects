import React from 'react'

const Balance = () => {
  return (
    <div className='mt-5'>
      <div>
        <h4>YOUR BALANCE</h4>
        <span style={{
          fontSize: "3rem",
          fontWeight: "500"
        }}>$0</span>
      </div>

      <div 
        className="d-flex mt-3" 
        style={{
          boxShadow: "0px 1px 3px rgb(0, 0, 0)"
        }}>
        <div className='income'>
          <h4>INCOME</h4>
          <span style={{
            color:"#99FF99",
            fontSize:"2rem"
          }}>$0</span>
        </div>
        <div className="vr"></div>
        <div className='expense'>
          <h4>EXPENSE</h4>
          <span style={{
            color:"#FF0066",
            fontSize:"2rem"
          }}>$0</span>
        </div>
      </div>
    </div>
  )
}

export default Balance