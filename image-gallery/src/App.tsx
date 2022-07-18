import Navbar from "./components/Navbar";
import Thumbnail from "./components/Thumbnail";
import Gallery from "./components/Gallery";
import { useState } from "react";

export default function App() {
  const [imgCategory,setImgCategory]: [string,Function] = useState("")
  return (
    <div>
      <Navbar setImgCategory={setImgCategory}/>
      <Thumbnail />
      <Gallery imgCategory={imgCategory}/>
    </div>
  );
}

// inspired by: https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=2