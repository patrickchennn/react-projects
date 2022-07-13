export default (state,action) => {
  console.log(state,typeof(state))
  console.log(action,typeof(action))
  switch (action.type) {
    case "DELETE_HISTORY_TRANSACTION":
      const filtered = state.transactions.filter(transaction => transaction.id !== action.payload)
    // setTransactions(filtered)
      return {
        ...state,
        transactions:filtered
      }
    default:
      return state
  }
}