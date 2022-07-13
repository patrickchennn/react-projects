import {createContext,useReducer} from 'react'
import AppReducer from "./AppReducer.jsx"

const initialState = {
  transaction: [
    {
      id:1,
      title:"buy a dog",
      amount:-1500,
      areIncomeOrExpense:"my-expense-card"
    },
    {
      id:2,
      title:"sell a cat",
      amount:2000,
      areIncomeOrExpense:"my-income-card"
    },
    {
      id:7,
      title:"sell a table",
      amount:2000,
      areIncomeOrExpense:"my-income-card"
    }
  ]
}

// Create context
export const GlobalContext = createContext(null)

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state,dispatch] = useReducer(AppReducer,initialState)
//   return (
//     <GlobalContext.Provider value={{
//       transactions: state.transactions
//     }}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }