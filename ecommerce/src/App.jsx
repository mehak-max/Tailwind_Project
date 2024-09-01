import React from 'react'
import Nabbar from './Components/Nabbar'
import Hero from './Components/Hero'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Route, Routes,useLocation } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Nabbar/>
      <Hero/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
