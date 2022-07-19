import Navbar from "./components/Navbar";
import Thumbnail from "./components/Thumbnail";
import Gallery from "./components/Gallery";
import {AppProvider} from "./context/AppContext"

export default function App() {

  return (
    <AppProvider>
      <Navbar />
      <Thumbnail />
      <Gallery />
    </AppProvider>
  );
}

// inspired by: https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=2