import React,{useContext} from 'react'
import { AppContext } from '../App.jsx'
import formatCurrency from '../utils/formatCurrency.js'
const ShowBalance = () => {
  const {transactions} = useContext(AppContext)
  let income=0,expense=0,totalMoney=0
  // let [income,expense,totalMoney] = () => {
  //   let income=0,expense=0,totalMoney=0;
  //   transactions.map(transaction => {
  //     totalMoney += transaction[1]
  //     (transaction[2]==="income-card") ? income+=transaction[1] :
  //     expense += transaction[1]
  //   });
  //   return [income,expense,totalMoney]
  // }
  // console.log(income,expense,totalMoney);
  transactions.map(transaction => {
    console.log(transaction[2],typeof(transaction[2]));
      totalMoney += transaction[1]
      // TOFINDOUT: why when I use ternary opertor is not working?
      // (transaction[2]==="income-card") ? income+=transaction[1] : expense += transaction[1]

      // this works fine
      if(transaction[2]==="income-card"){
        income+=transaction[1]
      }else{
        expense += transaction[1]
      }
  });
  console.log(income,expense,totalMoney);
  console.log(transactions,typeof(transactions))
  return (
    <div className='mt-5'>
      <div>
        <h4>YOUR BALANCE</h4>
        <span style={{
          fontSize: "3rem",
          fontWeight: "500"
        }}>{formatCurrency(totalMoney)}</span>
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
          }}>{formatCurrency(income)}</span>
        </div>

        <div className="vr"></div>

        <div className='expense'>
          <h4>EXPENSE</h4>
          <span style={{
            color:"#FF0066",
            fontSize:"2rem"
          }}>{formatCurrency(expense)}</span>
        </div>
      </div>
    </div>
  )
}

export default ShowBalance