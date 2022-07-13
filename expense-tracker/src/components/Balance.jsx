import React from 'react'
import formatCurrency from '../utils/formatCurrency.js'

const Balance = ({totalMoney}) => {
  return (
    <div>
      <h4>YOUR BALANCE</h4>
      <span style={{
        fontSize: "3rem",
        fontWeight: "500"
      }}>{formatCurrency(totalMoney)}</span>
    </div>
  )
}

export default Balance