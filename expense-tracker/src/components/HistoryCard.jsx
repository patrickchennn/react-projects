import { useState } from "react"

const HistoryCard = ({transaction,onDelete}) => {
  
  const [isDeleteBtnShowed,setDeleteBtnShowed] = useState(false)
  
  const showDeleteBtn = () => setDeleteBtnShowed(true)
  const hideDeleteBtn = () => setDeleteBtnShowed(false)

  // if the delete history btn showed, do the provided animation...
  const historyCardStyles = `my-history-card
    ${transaction.areIncomeOrExpense}
    ${isDeleteBtnShowed ? "my-history-card-on-hover" : "my-history-card-off-hover"}`
  ;

  const deleteHistoryBtnStyles = `btn position-absolute top-0 end-0 ${isDeleteBtnShowed ? "d-inline" : "d-none"}`;

  return (
    <div className="position-relative"
      onMouseEnter={showDeleteBtn}
      onMouseLeave={hideDeleteBtn}>
      <div className={historyCardStyles}>
        <span>{transaction.title}</span>
        {/* if the transaction.amount is postive, add "+" sign before the transaction.amount */}
        {/* else, no need to do anything couse negative sign already in there */}
        <span>{transaction.amount>0 ? `+${transaction.amount}` : transaction.amount}</span>
      </div>

      <button 
          className={deleteHistoryBtnStyles}
          onClick={() => onDelete(transaction.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
      </button>
    </div>
  )
}

export default HistoryCard