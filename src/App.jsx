import {Routes,Route} from "react-router-dom"
import {Link,Outlet} from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer";
import "./Layout.css";
export default function App() {
function sho(){
    document.getElementById("nav_items").style.display="block";
    document.getElementById("op").style.display="none";
    document.getElementById("cl").style.display="block";
}
function hid(){
  document.getElementById("nav_items").style.display="none";
  document.getElementById("cl").style.display="none";
  document.getElementById("op").style.display="block";
}
  return (
    <div>
       <nav className="flex justify-between items-center p-2 font-semibold text-3xl flex-wrap bg-lime-500" id="nav_full">
          <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-white hover:text-black">Subramaniyam</h1>
          </div>
          <div className="hidden text-white" id="op_cl">
            <h1 id="op" onClick={sho}>=</h1>
            <h1 className="hidden" id="cl" onClick={hid}>x</h1>
          </div></div>
          <div>
            <ul className="flex font-medium text-2xl text-black" id="nav_items">
            <li className="mr-8 bg-white p-2 rounded-md hover:bg-black hover:text-lime-500"><Link to="/react_test/">Home</Link></li>
            <li className="mr-8 bg-white p-2 rounded-md hover:bg-black hover:text-lime-500"><Link to="/react_test/about">About Me</Link></li>
            <li className="mr-8 bg-white p-2 rounded-md hover:bg-black hover:text-lime-500"><Link to="/react_test/portfolio">Portfolio</Link></li>
            <li className="mr-8 bg-white p-2 rounded-md hover:bg-black hover:text-lime-500"><Link to ="/react_test/contact">Contact Me</Link></li>
            </ul>
          </div>
        </nav>
      <Routes>
          <Route path="/react_test/" element={<Home/>}/>
          <Route path="/react_test/about" element={<About/>}/>
          <Route path="/react_test/portfolio" element={<Portfolio/>}/>
          <Route path="/react_test/contact" element={<Contact/>}/>
      </Routes>
      <Outlet/>
      <Footer/>
    </div>
  )
}
