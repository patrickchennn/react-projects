import {useEffect, useState} from "react"
import Card from "./Card"

interface GalleryProps {
  imgCategory: string,
}
const Gallery = ({imgCategory}: GalleryProps) => {
  console.log("gallery component is called")

  const [imgs,setImgs]: [Object[], Function] = useState([])
  const [areImgsFetched,setAreImgsFetched]: [boolean,Function] = useState(false)
  
  const key: string | undefined = process.env.REACT_APP_PIXABAY_API_KEY
  const url: string = `https://pixabay.com/api/?key=${key}&per_page=15&category=${imgCategory}`
  // console.log(`APIkey = ${key}`)

  // get images
  const getImgs = async () => {
    interface ImgsFromServer {
      hits: Object[],
    }
    const imgsFromServer: ImgsFromServer = await fetchImgs()
    
    imgsFromServer.hits.forEach((img: Object) => {
      setImgs((prev:Object[]) => [...prev,img])
    })
    setAreImgsFetched(true)
  }

  // fetch images from server
  const fetchImgs = async () => {
    // console.log("url: ",url);
    
    const res: Response = await fetch(url)
    const data = await res.json()
    return data
  }

  useEffect(() => {
    console.log("useeffect called")
    getImgs()
    return ()=> {
      setImgs([])
      console.log("cleanup data: ",imgs)
    }
  },[url])

  console.log(imgs)

  // render the html
  if(areImgsFetched){
    // console.log("render the html")
    return (
      <div className="
        my-4
        mx-8
        flex
        flex-wrap
        gap-3
        ">
        {
          imgs.map((img:any) => 
          <Card key={img.id} img={img}/> )
        }
      </div>
    )
  }else{
    // console.log("loading dulu boss");
    return (
      <div className="m-10 flex justify-center">
        <h1 className="text-6xl">Loading...</h1>
      </div>
    )
  }
}

export default Gallery