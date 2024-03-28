import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Flashs from "./Flashs"
import React, { useState, useEffect } from 'react';
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);
  return (
    <div>
       
      {loading ? <Flashs /> :
    
      <BrowserRouter>
      <Routes>
          <Route element={<Layout/>} >
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>}
    </div>
  )
}
