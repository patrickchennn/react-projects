import thumb from "../assets/thumb.jpg"

const Thumbnail = () => {
  return (
    <div style={{
      width:"100%",
      height:"90vh",
      backgroundImage:`url(${thumb})`,
      backgroundPosition: "center",
    }}>
    </div>
  )
}

export default Thumbnail