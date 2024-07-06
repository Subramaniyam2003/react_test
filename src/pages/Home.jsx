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
          <a className="bg-lime-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white hover:bg-black hover:text-lime-500" href="https://rb.gy/a8v57c">Download CV</a></div>
        </div>
        <div id="icon_per">
          <ul className="flex flex-col">
            <li><a href="https://github.com/subramaniyam2003/"><img className="h-10 w-10 mb-4" src={github_icon}/></a></li>
            <li><a href="https://www.linkedin.com/in/subramaniyam-shanmugam"><img className="h-10 w-10" src={linkedin_icon}/></a></li>
          </ul>
        </div>
    </div>
    <div className="mt-20" id="pro_rec">
    <div className="text-center md:text-4xl font-medium mb-5 text-3xl animate-bounce">My Recent Works</div>
    <p className="text-center md:text-3xl font-medium mb-5 text-3xl animate-bounce">Projects Done</p>
   <div className="flex flex-wrap items-center justify-evenly">
   <div className="h-98 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce text-white mt-2">Face Identification System</h1>
        <div className="bg-black m-3 p-1 rounded-lg">
        <h1 className="font-semibold text-white">Duration <br/><span className="text-lime-500">Dec 2022 - Jan 2023</span></h1>
        <h1 className="font-semibold text-lime-500"><span className="text-white">Skills Used</span><ul>
          <li>Python,</li>
          <li>Tkinter (GUI in Python),</li>
          <li>OpenCV.</li>
          </ul></h1>
         
          <h1 className="text-white">Description</h1>
        <h1 className="text-lime-500">To find the specific human face matches the images in the database or not.</h1>
        </div>
        </div>
    </div>
    <div className="h-98 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce text-white mt-2">Speech to Google Search</h1>
        <div className="bg-black m-3 p-1 rounded-lg">
        <h1 className="font-semibold text-white">Duration <br/><span className="text-lime-500">Mar - 2024</span></h1>
        <h1 className="font-semibold text-lime-500"><span className="text-white">Skills Used</span><ul>
          <li>Python,</li>
          <li>Speech Recognition,</li>
          <li>Web Browser.</li>
          </ul></h1>
         
          <h1 className="text-white">Description</h1>
        <h1 className="text-lime-500">To accurately capture the user voice to perform the google search using python.</h1>
        </div>
        </div>
    </div>
    <div className="h-98 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce text-white mt-2">Fitness Tracking Website</h1>
        <div className="bg-black m-3 p-1 rounded-lg">
        <h1 className="font-semibold text-white">Duration <br/><span className="text-lime-500">Mar - 2024</span></h1>
        <h1 className="font-semibold text-lime-500"><span className="text-white">Skills Used</span><ul>
          <li>HTML,</li>
          <li>CSS,</li>
          <li>JavaScript.</li>
          </ul></h1>
         
          <h1 className="text-white">Description</h1>
        <h1 className="text-lime-500">To monitor and track the physical activity and advertise our services.</h1>
        </div>
        </div>
    </div>
    <div className="h-98 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce text-white mt-2">Cybercrime Analysis Power BI</h1>
        <div className="bg-black m-3 p-1 rounded-lg">
        <h1 className="font-semibold text-white">Duration <br/><span className="text-lime-500">Apr 2024 - Mar 2024</span></h1>
        <h1 className="font-semibold text-lime-500"><span className="text-white">Skills Used</span><ul>
          <li>Power BI,</li>
          <li>Excel,</li>
          <li>Data Visualization.</li>
          </ul></h1>
         
          <h1 className="text-white">Description</h1>
        <h1 className="text-lime-500">To visualize and find hidden trends and patterns inside the dataset and make decisions.</h1>
        </div>
        </div>
    </div>
    <div className="h-98 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce text-white mt-2">Mobile Price Analysis Power BI</h1>
        <div className="bg-black m-3 p-1 rounded-lg">
        <h1 className="font-semibold text-white">Duration <br/><span className="text-lime-500">Apr 2024 - Mar 2024</span></h1>
        <h1 className="font-semibold text-lime-500"><span className="text-white">Skills Used</span><ul>
          <li>Power BI,</li>
          <li>Excel,</li>
          <li>Data Visualization.</li>
          </ul></h1>
         
          <h1 className="text-white">Description</h1>
        <h1 className="text-lime-500">To visualize and find hidden trends and patterns inside the dataset and make decisions.</h1>
        </div>
        </div>
    </div>
      </div>
      <p className="text-center md:text-3xl font-medium mt-5 mb-5 text-3xl animate-bounce">Internships Completed</p>
   <div className="flex flex-wrap items-center justify-evenly">
   <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={data_ana}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Data Analytics</h1>
        <h1 className="font-normal text-white">Edunet Foundation with IBM</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={chat_app}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Web Development and Hosting</h1>
        <h1 className="font-normal text-white">Gauravgo Games Technologies</h1>
        </div>
      </div>
      </div>
  </div>
</div>
  )
}
