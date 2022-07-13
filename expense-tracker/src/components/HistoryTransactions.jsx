import HistoryCard from './HistoryCard.jsx'
import { GlobalContext } from '../context/GlobalState.jsx'
import {useContext} from "react"

const HistoryTransactions = ({onDelete}) => {
  const {transactions} = useContext(GlobalContext)

  return (
    <div className="mt-5">
      <h4><span>History</span></h4>
      <hr />
      <div className='d-flex flex-column' style={{rowGap:"0.5rem"}}>
        {
          transactions.map(transaction => <HistoryCard key={transaction.id} transaction={transaction} onDelete={onDelete}/>)
        }
      </div>
    </div>
  )
}

export default HistoryTransactions