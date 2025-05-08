import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Loading from "./components/utils/Loading"
import Trending from "./components/templets/Trending"
import Popular from "./components/templets/Popular"
import Movies from "./components/templets/Movies"
import TVShows from "./components/templets/TVShows"
import People from "./components/templets/People"
import About from "./components/templets/About"
import Contact from "./components/templets/Contact"
function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/tv" element={<TVShows/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App