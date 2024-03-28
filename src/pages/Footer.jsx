import { Link } from "react-router-dom"

export default function Footer() {
  return (

    <div className="bg-lime-500 text-white text-center mt-10 p-4">
      <p className="font-semibold text-3xl m-4 text-black">Subramaniyam</p>
      <ul className="flex justify-evenly  p-4 flex-wrap text-2xl">
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black"><Link to="/">Home</Link></li>
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black"><Link to="/about">About Me</Link></li>
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black"><Link to="/portfolio">Portfolio</Link></li>
        <li className="bg-white p-3 m-2 rounded-md font-semibold text-black"><Link to="/contact">Contact Us</Link></li>
      </ul>
      <h1 className="font-semibold text-3xl m-4 text-black">Get in Touch With</h1>
      <ul  className="flex justify-center items-center  flex-wrap">
        <li><a href="https://github.com/subramaniyam2003/"><img className="w-7 h-7 m-2 animate-bounce" src={"./src/assets/githubb_icon.png"}/></a></li>
        <li><a href="https://www.linkedin.com/in/subramaniyam-s-b29731277/"><img className="w-7 h-7 m-2 animate-bounce" src={"./src/assets/linkedinb_icon.png"}/></a></li>
    
      </ul>
    </div>
  )
}
