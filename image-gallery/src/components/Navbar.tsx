import { useAppContext } from "../context/AppContext"

const Navbar = () => {
  interface AppContextInterface {
    imgCategory: string,
    searchInput: string,
    setImgCategory: React.Dispatch<React.SetStateAction<string>>,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
  }
  const {setImgCategory} = useAppContext() as AppContextInterface
  const categoryOnClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement | any
    // console.log(e.currentTarget)
    // console.log(target)
    if(e.currentTarget!==target){
      // console.log(target.textContent.toLowerCase())
      setImgCategory(target.textContent.toLowerCase())
    }
  }
  
  return (
    <>
      <nav className="py-5 px-10 flex justify-between">
        <div>LOGO HERE</div>
        <div className="grow-2">SEARCH BAR</div>

        <ul onClick={categoryOnClick} className="text-2xl flex gap-x-4">
          <li className="cursor-pointer">Nature</li>
          <li className="cursor-pointer">Fashion</li>
          <li className="cursor-pointer">Food</li>
          <li className="cursor-pointer">Health</li>
          <li className="cursor-pointer">People</li>
        </ul>
        
      </nav>
      <div className="flex justify-center">
        <hr className="w-11/12"/>    
      </div>
    </>
  )
}

export default Navbar