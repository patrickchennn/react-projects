import formatCurrency from '../utils/formatCurrency.js'
import objectStringifier from '../utils/objectStringifier.js'

const ShowBalance = ({transactions}) => {
  // console.log(objectStringifier(transactions))

  let income=0,expense=0,totalMoney=0
  transactions.forEach(transaction => {
    // console.log(transaction,typeof(transaction));

    totalMoney += transaction.amount
    transaction.areIncomeOrExpense==="income-card" ? income+=transaction.amount : expense += transaction.amount
  })
  // console.log(income,expense,totalMoney);

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