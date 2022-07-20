import {useEffect, useState} from "react"
import Card from "./Card"
import { useAppContext } from "../context/AppContext"

const Gallery = () => {
  interface AppContextInterface {
    imgCategory: string,
    searchInput: string,
    setImgCategory: React.Dispatch<React.SetStateAction<string>>,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
  }
  const {imgCategory,searchInput} = useAppContext() as AppContextInterface

  // console.log("gallery component is called")

  const [imgs,setImgs] = useState<Array<Object>>([])
  const [areImgsFetched,setAreImgsFetched] = useState(false)
  
  const key: string | undefined = process.env.REACT_APP_PIXABAY_API_KEY
  const url: string = `https://pixabay.com/api/?key=${key}&per_page=30&category=${imgCategory}&q=${searchInput}`
  // console.log(`APIkey = ${key}`)

  // get images
  const getImgs = async () => {
    interface ImgsFromServer {
      hits: Array<Object>,
    }
    const imgsFromServer: ImgsFromServer = await fetchImgs()
    
    imgsFromServer.hits.forEach((img: Object) => {
      setImgs((prev:Array<Object>) => [...prev,img])
    })
    setAreImgsFetched(true)
  }

  // fetch images from server
  const fetchImgs = async () => {
    console.log("url: ",url);
    
    const res: Response = await fetch(url)
    const data = await res.json()
    return data
  }

  // TODO: add "more" button which it will render more images
  // const getMoreImgs =  () => {
  //    getImgs()
  //   console.log(imgs)
  // }

  useEffect(() => {
    console.log("useeffect called")
    getImgs()
    return () => {
      setImgs([])
      console.log("cleanup data: ",imgs)
    }
  // eslint-disable-next-line
  },[url])

  
  console.log(imgs)

  // render the HTML
  // if images already fetched from server
  if(areImgsFetched){
    // and there are no images found
    if(imgs.length < 1){
      return (
        <div className="m-10 flex justify-center">
          <h1 className="text-6xl">Images Not Found</h1>
        </div>
      )
    }
    return (
      <div className="shadow-2xl shadow-inner mx-3 my-3 py-4 rounded-xl bg-gray-100">
        <div className=" flex flex-wrap justify-center gap-3">
          {
            imgs.map((img:any) => <Card key={img.id} img={img}/> )
          }
        </div>
        {/* TODO: add "more" button which basically it will render more images whenever we click the button*/}
        {/* The main problem I can't guarantee that the new rendered images will be random */}
        {/* possible solution: is to add a random number to the image id so that the image will appear randomly. But it seems like a lot of work and error prone*/}
        {/* example solution: suppose we have img.id = 712312 and we add any number so that it will different from 712312. In this case let's add 1. So img.id = 712313*/}
        {/* and another problem is what if image with id 712313 does not exist?*/}
        {/* another algorithm is necessary in order to check the images... */}
        {/* If there is a random image option in the API, it will be easier to implement this feature */}
        {/* <div onClick={getMoreImgs} className="mt-12 flex justify-center">
          <button className="w-48 rounded-2xl py-3 bg-green-400 text-3xl text-stone-600">More</button>
        </div> */}
      </div>
    )
  }else{
    return (
      <div className="m-10 flex justify-center">
        <h1 className="text-6xl">Loading...</h1>
      </div>
    )
  }
}

export default Gallery