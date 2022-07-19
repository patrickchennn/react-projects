import AllCategoryPicker from "./AllCategoryPicker"
import InputForm from './InputForm';

const SearchSection = () => {
  return (
    <div className="flex w-3/5 h-16" style={{
      position:"absolute",
      left:"50%",
      top:"50%",
      transform: "translate(-50%, -50%)"
    }}>
      <AllCategoryPicker />
      <InputForm />
    </div>

  )
}

export default SearchSection