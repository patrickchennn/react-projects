import {useEffect, useState} from "react"
import Card from "./Card"

const Gallery = () => {
  const [imgsUrl,setImgsUrl] = useState([])
  console.log("render")
  const key: string = "28622116-7fdd24051e0f0171f85fc0260"

  useEffect(() => {
    console.log("useeffect")
    const getImgs = async () => {
      const imgsFromServer = await fetchImgs()
      setImgsUrl(imgsFromServer.hits.map(img => img.webformatURL))
    }
    getImgs()
  }, [])

  const fetchImgs = async () => {
    const res: Response = await fetch(`https://pixabay.com/api/?key=${key}&per_page=3`)
    const data = await res.json()
    return data
  }
  console.log(imgsUrl)
  return (
    <div className="m-8 border-2 border-black container">
      {imgsUrl.map(imgUrl => <Card imgUrl={imgUrl}/> )}
      
    </div>
  )
}

export default Gallery