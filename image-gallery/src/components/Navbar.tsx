interface NavBarProps{
  setImgCategory:Function
}
const Navbar = ({setImgCategory}: NavBarProps) => {
  function categoryOnClick(e: any){
    // console.log(e.currentTarget)
    // console.log(e.target)
    if(e.currentTarget!==e.target){
      // console.log(e.target.textContent.toLowerCase())
      setImgCategory(e.target.textContent.toLowerCase())
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