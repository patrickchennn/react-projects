import tree1280x796 from "../assets/tree1280x796.jpg"
import SearchSection from "./SearchSection"

const Thumbnail = () => {
  return (
    <div className="w-full relative">
      <img className="w-full" src={tree1280x796} alt="" />
      <SearchSection/>
    </div>
  )
}

export default Thumbnail