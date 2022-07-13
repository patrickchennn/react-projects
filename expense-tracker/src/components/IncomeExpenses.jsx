import formatCurrency from '../utils/formatCurrency.js'

const IncomeExpenses = ({income,expense}) => {
  return (
    <div className="d-flex mt-3" style={{boxShadow: "0px 1px 3px rgb(0, 0, 0)"}}>
      <div className='my-income-total'>
        <h4>INCOME</h4>
        <span style={{
          color:"#99FF99",
          fontSize:"2rem"
        }}>{formatCurrency(income)}</span>
      </div>

      <div className="vr"></div>

      <div className='my-expense-total'>
        <h4>EXPENSE</h4>
        <span style={{
          color:"#FF0066",
          fontSize:"2rem"
        }}>{formatCurrency(expense)}</span>
      </div>
    </div>
  )
}

export default IncomeExpenses