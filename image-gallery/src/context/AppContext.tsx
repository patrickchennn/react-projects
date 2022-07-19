import { createContext,useContext,useState } from "react";

interface AppContextInterface {
  imgCategory: string,
  searchInput: string,
  setImgCategory: React.Dispatch<React.SetStateAction<string>>,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}
const AppContext = createContext<AppContextInterface | null>(null)


const useAppContext = () => {
  return useContext(AppContext)
}


const AppProvider = ({children}: React.ReactNode | any) => {
  const [imgCategory,setImgCategory] = useState("")
  const [searchInput,setSearchInput] = useState("")
  return (
    <AppContext.Provider value={{imgCategory, setImgCategory,searchInput,setSearchInput }}>
      {children}
    </AppContext.Provider>
  )
}

export {useAppContext,AppProvider}