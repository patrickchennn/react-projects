
const HistoryCard = ({transaction}) => {
  return (
    <div className={transaction.areIncomeOrExpense}>
      <span>{transaction.title}</span>
      {/* if transaction.amount is positive, add the plus sign(to indicate it's a positive value!)*/}
      <span>{transaction.amount>0 ? `+${transaction.amount}` : transaction.amount}</span>
      <button 
        className='
          btn 
          p-0 
          position-absolute
          end-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    </div>
  )
}

export default HistoryCard