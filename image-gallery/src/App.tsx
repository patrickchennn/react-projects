import Navbar from "./components/Navbar";
import Thumbnail from "./components/Thumbnail";
import Gallery from "./components/Gallery";
import {AppProvider} from "./context/AppContext"
import ToTop from "./components/ToTop";

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <Thumbnail />
      <Gallery />
      <ToTop/>
    </AppProvider>
  )
}
// API key from pixabay.com is necessary to put inside of the .env file in order to make this image gallery" running.
// https://pixabay.com/api/docs/
// inspired by: https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=2