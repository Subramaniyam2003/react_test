import chat_app from '/chat_app.png';
import fit_web from '/fit_web.png';
import face_iden from '/face_iden.png';
import data_ana from '/data_ana.png';
import paper_pub from '/paper_pub.png';
export default function Portfolio() {
  return (
    <div className="mt-14">
    <div className="text-center md:text-5xl font-medium mb-14 text-3xl animate-bounce">My Recent Works</div>
   
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
  )
}
