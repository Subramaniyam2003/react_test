import {Link,Outlet} from "react-router-dom";
import Footer from "./pages/Footer";
import "./Layout.css";
export default function Layout() {
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
            <h1 className="text-white ">Subramaniyam</h1>
          </div>
          <div className="hidden text-white" id="op_cl">
            <h1 id="op" onClick={sho}>=</h1>
            <h1 className="hidden" id="cl" onClick={hid}>x</h1>
          </div></div>
          <div>
            <ul className="flex font-medium text-2xl text-black" id="nav_items">
            <li className="mr-8"><Link to="/">Home</Link></li>
            <li className="mr-8"><Link to="/about">About Me</Link></li>
            <li className="mr-8"><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to ="/contact">Contact Me</Link></li>
            </ul>
          </div>
        </nav>
        <Outlet/>
      <Footer/>
    </div>
  )
}
