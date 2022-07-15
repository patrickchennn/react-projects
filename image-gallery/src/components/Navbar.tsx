
const Navbar = () => {
  return (
    <>
      <nav className="py-5 px-10 flex justify-between">
        <div>LOGO HERE</div>
        <div className="grow-2">SEARCH BAR</div>
        <ul className="text-2xl flex gap-x-4">
          <li>Nature</li>
          <li>Fashion</li>
          <li>Food & Drink</li>
          <li>Wallpapers</li>
          <li>People</li>
        </ul>
      </nav>
      <div className="flex justify-center">
        <hr className="w-11/12"/>    
      </div>
    </>
  )
}

export default Navbar