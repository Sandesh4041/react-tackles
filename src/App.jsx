import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import Service from "./page/Service"
import Gallery from "./page/Gallery"
import Appoiment from "./page/Appoiment"
import Contact from "./page/Contact"
import Privacy from "./page/Privacy"
import Team from "./page/Team"
import Reviews from "./page/Reviews"
import Tos from './page/Tos'
import Faq from "./page/Faq"


function App() {


  return (
    <>
      <div>
    <BrowserRouter>

    <Routes>
      <Route path="/" index element={<Home/>}/>
      <Route path="/aboutus"  element={<About/>}/>
      <Route path="/service"  element={<Service/>}/>
      <Route path="/gallery"  element={<Gallery/>}/>
      <Route path="/appointment" element={<Appoiment/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/tos" element={<Tos/>}/>
      <Route path="/faq" element={<Faq/>}/>
    </Routes>
    </BrowserRouter>
      </div>
       
    </>
  )
}

export default App
