export default (transactions,action) => {
  console.log(transactions,typeof(transactions))
  console.log(action,typeof(action))
  switch (action.type) {
    case "DELETE_HISTORY_TRANSACTION":
      const filtered = transactions.filter(transaction => transaction.id !== action.payload)
      return filtered
    case "ADD_TRANSACTION":
      return [...transactions,action.newTransaction]
       
    default:
      return transactions
  }
}