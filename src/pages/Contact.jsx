
export default function Contact() {
    
  return (
    <div>
        <div>
            <h1 className="text-center md:text-5xl font-medium mt-14 mb-10 text-3xl animate-bounce">Let's Talk</h1>
        </div>
        <div>
            <form className="flex justify-center items-center flex-col" action="https://formsubmit.co/subramaniyamsvss@gmail.com" method="POST">
                <div className="m-4">
                <label className="font-medium text-xl p-2">Full Name</label>
                <br/>
                <input className="border-black border-2 p-4 rounded-md placeholder:italic w-96" placeholder="Enter your Name" type="text" required name="name"></input>
                </div>
                <div className="m-4">
                <label className="font-medium text-xl p-2 ">Email Address</label><br/>
                <input className="border-black border-2 p-4 rounded-md placeholder:italic w-96" placeholder="Enter your Email" type="email" required name="email"></input>
                </div>
                <div className="m-4">
                <label className="font-medium text-xl p-2 ">Message</label><br/>
                <textarea className="border-black border-2 rounded-md p-4 placeholder:italic h-56 w-96"placeholder="Enter your message" required name="message"></textarea>
                </div>
          <button className="bg-lime-500 px-4 py-2 rounded-sm text-2xl font-semibold text-white cursor-pointer animate-bounce" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
