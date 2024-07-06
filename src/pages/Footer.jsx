import { Link } from "react-router-dom"
import github_logo from '/githubb_icon.png'
import linked_logo from '/linkedinb_icon.png'
export default function Footer() {
  return (

    <div className="bg-lime-500 text-white text-center mt-10 p-4">
      <p className="font-semibold text-3xl m-4 text-black">Subramaniyam</p>
      <ul className="flex justify-evenly  p-4 flex-wrap text-2xl">
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black hover:text-lime-500 hover:bg-black"><Link to="/react_test/">Home</Link></li>
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black hover:text-lime-500 hover:bg-black"><Link to="/react_test/about">About Me</Link></li>
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black hover:text-lime-500 hover:bg-black"><Link to="/react_test/portfolio">Portfolio</Link></li>
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black hover:text-lime-500 hover:bg-black"><Link to="/react_test/contact">Contact Us</Link></li>
      </ul>
      <h1 className="font-semibold text-3xl m-4 text-black">Get in Touch With</h1>
      <ul  className="flex justify-center items-center  flex-wrap">
        <li><a href="https://github.com/subramaniyam2003/"><img src={github_logo} className="w-7 h-7 m-2 animate-bounce" alt="loading" /></a></li>
        <li><a href="https://www.linkedin.com/in/subramaniyam-shanmugam"><img className="w-7 h-7 m-2 animate-bounce" src={linked_logo}/></a></li>
    
      </ul>
    </div>
  )
}
