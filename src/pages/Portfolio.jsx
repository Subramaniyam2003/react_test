import Footer from "./Footer"
export default function Portfolio() {
  return (
    <div className="mt-14">
    <div className="text-center md:text-5xl font-medium mb-14 text-3xl animate-bounce">My Recent Works</div>
   
   <div className="flex flex-wrap items-center justify-evenly">
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={"./src/assets/chat_app.png"}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Chat Application</h1>
        <h1 className="font-normal text-white">UI / UX</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={"./src/assets/fit_web.png"}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Fitness Website</h1>
        <h1 className="font-normal text-white">Frontend Design</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={"./src/assets/face_iden.png"}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Face Identification</h1>
        <h1 className="font-normal text-white">Python - Tkinter</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-6" src={"./src/assets/data_ana.png"}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Data Analytics</h1>
        <h1 className="font-normal text-white">Python</h1>
        </div>
      </div>
      <div className="h-96 w-96 bg-lime-500 flex flex-col justify-center items-center m-5 rounded-lg">
        <div>
        <img className="mt-10 h-56 w-80 mb-4" src={"./src/assets/paper_pub.png"}/></div>
        <div className="font-semibold text-2xl text-center">
        <h1 className="animate-bounce">Face Recognition and Image Identification</h1>
        <h1 className="font-normal text-white">Paper Published</h1>
        </div>
      </div>
      </div>
  </div>
  )
}
