import React,{useState} from 'react'
import CaretDown from './CaretDown'
import CaretUp from './CaretUp'
import { useAppContext } from "../context/AppContext"

const AllCategoryPicker = () => {
  interface AppContextInterface {
    imgCategory: string,
    searchInput: string,
    setImgCategory: React.Dispatch<React.SetStateAction<string>>,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
  }
  const {setImgCategory,imgCategory} = useAppContext() as AppContextInterface

  const [isCategoryClicked, setIsCategoryClicked] = useState(false)

  const handleCategory = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement | any
    // console.log(e.currentTarget)
    // console.log(target)
    if(e.currentTarget!==target){
      // console.log(target.textContent.toLowerCase())
      if(target.textContent==="None"){
        setImgCategory("")
        return
      }
      setImgCategory(target.textContent.toLowerCase())
    }
  }

  const handleCategoryButton = () => setIsCategoryClicked((prev:boolean) => !prev)

  return (
    <div onClick={handleCategoryButton} className="relative bg-stone-200 rounded-l-xl">
      <button className="h-full inline-flex items-center py-2.5 px-4 text-xl font-medium text-center text-gray-900 bg-gray-100 rounded-l-lg hover:bg-gray-50 focus:ring focus:outline-none focus:ring-black" type="button">
        {imgCategory.length>0 ? imgCategory : "Any"}
        {isCategoryClicked ? <CaretUp width={20} height={20}/> : <CaretDown width={20} height={20}/>}
      </button>

      <ul onClick={handleCategory} className={`${isCategoryClicked ? "block" : "hidden"} absolute bg-stone-200 text-lg text-gray-700`} style={{top:"68px",right:"0px"}}>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">Any</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">animals</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">industry</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">travel</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">music</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">business</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">education</button>
        </li>
      </ul>
    </div>
  )
}

export default AllCategoryPicker