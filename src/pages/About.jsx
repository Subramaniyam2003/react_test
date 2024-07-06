import profile from '/new (1) (1).png';
export default function About() {
  return (
    <div>
        <h1 className="text-center md:text-5xl font-medium m-14 text-3xl animate-bounce">About Me</h1>
        <div className="flex items-center justify-evenly flex-wrap" >
        <span class="relative flex h-64 w-64">
        <span class="animate-ping absolute inline-flex h-48 w-44 m-10 rounded-full bg-lime-700"></span>
        <span class="relative inline-flex rounded-full h-64 w-64">        
      <img className="rounded-full bg-lime-200 border-lime-500 border-8" style={{height:"17rem",width:"16rem"}} src={profile}></img></span>
        </span>
       
        <div className="flex flex-col " id="about_details">
          <h1 className="font-medium text-xl m-12 text-justify">I am Subramaniyam studying <span className="text-lime-500 font-bold">Computer Science and Engineering</span> in Anna University. I wish to start my career in <span className="text-lime-500 font-bold">Software Engineer, Developer, Designer ,Data Analyst or Digital Marketing</span> side because I am very much interested in that domains and it's my passion. I always <span className="text-lime-500 font-bold"> curious to learn new things</span> and adapt the new places, it will helpful for my future career and easy to learn upcoming trending technologies. I always follow the rule like <span className="text-lime-500 font-bold">"Time + Effort = Success".</span> But, sometimes the rule was failed. In that scenario <span className='text-lime-500 font-bold'>I realize the failure and picking up myself the next time again after I felt down. That was a great success.</span> </h1>
          
          
            <h1 className="text-center md:text-5xl font-medium m-10 text-3xl animate-bounce">My Skills</h1>
            <div className="bg-lime-500 rounded-xl p-6 ml-6 mr-6 mb-10">
            <ul className="flex  justify-center items-center flex-wrap">
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">C Programming</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Python</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Power BI</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">SQL</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black">HTML</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">CSS</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">JavaScript</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">React Js</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Express Js</li>
                <li className="bg-white p-4 m-2 rounded-md font-semibold text-black ">Figma</li>
                
            </ul></div>
          </div>
        </div>
    </div>

  )
}
