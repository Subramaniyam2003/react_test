import "./Home.css"
import profile from '/new (1) (1).png';
import chat_app from '/chat_app.png';
import fit_web from '/fit_web.png';
import face_iden from '/face_iden.png';
import data_ana from '/data_ana.png';
import paper_pub from '/paper_pub.png';
import github_icon from '/github_icon.png';
import linkedin_icon from '/linkedin_icon.png'
export default function Home() {
  return (
    <div>   
      <div className="flex items-center justify-around p-10  flex-wrap" id="whole">
      
      <span class="relative flex h-64 w-64">
        <span class="animate-ping absolute inline-flex h-48 w-44 m-10 rounded-full bg-lime-700"></span>
        <span class="relative inline-flex rounded-full h-64 w-64">        
      <img className="rounded-full bg-lime-200 border-lime-500 border-8" style={{height:"17rem",width:"16rem"}} src={profile}></img></span>
        </span>

        <div className="flex flex-col mr-14" id="pro_det">
          <h1 className="font-semibold text-5xl pb-4" id="name">Subramaniyam S</h1>
          <h1 className="font-medium text-xl pb-8">Computer Science and Engineering</h1>
          <div className="inline-block" id="downlo">
          <a className="bg-lime-500 px-4 py-2 rounded-sm text-2xl font-semibold text-white" href="https://drive.google.com/file/d/1tbxxXiVYoZHx5b-HPjew3k2vk2A1dFNt/view?usp=drive_link">Download CV</a></div>
        </div>
        <div id="icon_per">
          <ul className="flex flex-col">
            <li><a href="https://github.com/subramaniyam2003/"><img className="h-10 w-10 mb-4" src={github_icon}/></a></li>
            <li><a href="https://www.linkedin.com/in/subramaniyam-s-b29731277/"><img className="h-10 w-10" src={linkedin_icon}/></a></li>
          </ul>
        </div>
    </div>
    
    <div className="mt-20" id="pro_rec">
    <div className="text-center  md:text-5xl font-medium mb-14 text-3xl animate-bounce">My Recent Works</div>
   
   <div className="flex flex-wrap items-center justify-evenly">
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={chat_app}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Chat Application</h1>
        <h1 className="font-normal text-white">UI / UX</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={fit_web}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Fitness Website</h1>
        <h1 className="font-normal text-white">Frontend Design</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={face_iden}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Face Identification</h1>
        <h1 className="font-normal text-white">Python - Tkinter</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={data_ana}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Data Analytics</h1>
        <h1 className="font-normal text-white">Python</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-4" src={paper_pub}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Face Recognition and Image Identification</h1>
        <h1 className="font-normal text-white">Paper Published</h1>
        </div>
      </div>
      </div>
  </div>
  
</div>

  )
}
