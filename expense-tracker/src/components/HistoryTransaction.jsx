import React,{useContext} from 'react'
import { AppContext } from '../App.jsx'
import HistoryCard from './HistoryCard.jsx'

const HistoryTransaction = () => {
  const {transactions} = useContext(AppContext)
  // console.log(transactions);

  return (
    <div className="mt-5">
      <h4><span>History</span></h4>
      <hr />
      <div className='d-flex flex-column' style={{rowGap:"0.5rem"}}>
        {
          transactions.map(transaction => <HistoryCard transaction={transaction}/>)
        }
      </div>
    </div>
  )
}

export default HistoryTransaction