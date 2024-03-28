export default function About() {
  return (
    <div>
        <h1 className="text-center md:text-5xl font-medium m-14 text-3xl animate-bounce">About Me</h1>
        <div className="flex items-center justify-evenly flex-wrap" >
        <span class="relative flex h-64 w-64">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-700"></span>
        <span class="relative inline-flex rounded-full h-64 w-64">        
      <img className="rounded-full bg-lime-200 border-lime-500 border-8" style={{height:"17rem",width:"16rem"}} src={"./src/assets/new (1) (1).png"}></img></span>
        </span>
       
        <div className="flex flex-col " id="about_details">
          <h1 className="font-medium text-xl m-12 text-justify">I am subramaniyam studying <span className="text-lime-500 font-bold">Computer Science and Engineering</span> in Anna University. I wish to start my career in <span className="text-lime-500 font-bold">software, developer, designer and data analyst</span> side because I very much interested in that domains and it's my passion. I always <span className="text-lime-500 font-bold"> curious to learn new things</span> and adapt the new places, it will helpful for my future carrer and easy to learn upcoming trending technologies. I always follow the rule like <span className="text-lime-500 font-bold">"Time + Effort = Success".</span></h1>
          
          
            <h1 className="text-center md:text-5xl font-medium m-10 text-3xl animate-bounce">My Skills</h1>
            <div className="bg-lime-500 rounded-xl p-6 ml-6 mr-6 mb-10">
            <ul className="flex  justify-center items-center flex-wrap">
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black">HTML</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">CSS</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">JavaScript</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">React</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Vite</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Tailwind CSS</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Figma</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">C</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Python</li>
            </ul></div>
          </div>
        </div>
    </div>

  )
}
