import tree1280x796 from "../assets/tree1280x796.jpg"

const Thumbnail = () => {
  return (
    <div className="w-full relative">
      <img className="w-full" src={tree1280x796} alt="" />

      <form className="flex w-3/5 h-16" style={{
        position:"absolute",
        left:"50%",
        top:"50%",
        transform: "translate(-50%, -50%)"
      }}>
        <div className="relative bg-stone-200 rounded-l-xl">
          <button className="h-full inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-l-lg hover:bg-gray-50 focus:ring focus:outline-none focus:ring-black" type="button">All categories 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          <ul className="absolute bg-stone-200 text-lg text-gray-700" style={{top:"68px",right:"0px"}}>
            <li>
              <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">Mockups</button>
            </li>
            <li>
              <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">Templates</button>
            </li>
            <li>
              <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">Design</button>
            </li>
            <li>
              <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-stone-100">Logos</button>
            </li>
          </ul>
        </div>

        <input type="text" className="bg-stone-100 text-5xl"/>
        
        <button className="bg-sky-500 rounded-r-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </form>

    </div>
  )
}

export default Thumbnail