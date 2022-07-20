import React,{useState} from 'react'
import { useAppContext } from "../context/AppContext"

const InputForm = () => {
  interface AppContextInterface {
    imgCategory: string,
    searchInput: string,
    setImgCategory: React.Dispatch<React.SetStateAction<string>>,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
  }
  const {setSearchInput} = useAppContext() as AppContextInterface

  const [imgInput, setImgInput] = useState("")

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(imgInput)
    setSearchInput(imgInput)
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input type="text" value={imgInput} onChange={(e) => setImgInput(e.target.value)} className="w-full h-full px-3 bg-stone-100 text-5xl"/>
      
      <button type='submit' className="bg-sky-500 rounded-r-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="32" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>
  </form>
  )
}

export default InputForm