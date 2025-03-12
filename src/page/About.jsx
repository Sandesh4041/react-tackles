import { useEffect, useState } from "react"
import Accordian from "../component/Accordian"
import Nav from "../component/Nav"
import Footer from "../component/Footer";


const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
  }, [])

  return (
    <div>
      <Nav />
      <div className=" h-[50vh]" style={{ background: "linear-gradient(to bottom, rgba(25, 23, 23, 0.8), rgba(34, 34, 34, 0.2))" }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <div className="flex gap-2">
            <h1 className="text-white">Home /</h1>
            <p className="text-primary"> About Us</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] nine:w-[80%] mx-auto mt-[50px] flex flex-col items-center justify-center">
        <h1 className="text-green-500">All About Us</h1>
        <h1 className="text-primary font-bold text-3xl" >About Tackles</h1>
        <p className="text-center  text-primary mt-[40px]" style={{ fontFamily: "Satisfy,cursive" }}>Tackles Technical LLC, located in the vibrant city of Dubai, is a leading provider of comprehensive technical services for residential, commercial, and industrial properties. We specialize in a wide range of maintenance and repair solutions, including expert painting, plumbing, plastering, wallpaper fixing, floor and wall tiling, and carpentry. Our skilled team also handles air conditioning repairs, air filtration system maintenance, and professional cladding services.
          With a focus on delivering quality craftsmanship and timely solutions, Tackles Technical LLC is committed to enhancing the comfort, functionality, and aesthetics of properties across Dubai. Our dedication to excellence, reliability, and customer satisfaction makes us a trusted partner for all technical and maintenance needs.</p>
      </div>

      <div className="w-[90%] nine:w-[80%] mx-auto mt-[40px] ">
        <Accordian />
      </div>
      {/* ....... */}
      <div className="mt-[30px] bg-gray-100 py-[2rem]" >
        <div className="w-[90%] nine:w-[80%] mx-auto">


          <div className="py-[2rem]">
            <h1 className="text-green-500">Internationally Trusted</h1>
            <h1 className="text-primary font-bold text-3xl">Certifications<span className="text-blue-900 txt-xl">.</span></h1>
          </div>

          <div className=" flex flex-col ten:flex-row gap-4 ten:gap-2 ">
            <p className="text-gray-500 w-full ten:w-[30%]">Tackles is innovative and certified for best service that any other company can't provide. We are trusted by our clients and provide new creative touch while delivering our project.</p>


            <div class="flex my-auto w-full ten:w-[15%] flex-col bg-white p-2 py-4 items-center shadow-2xl">
              <i className='bx bx-notepad text-3xl text-black font-bold'  ></i>
              <p className="text-primary font-bold text-xl">SAFETY</p>
            </div>

            <div class="flex flex-col my-auto w-full ten:w-[15%]  bg-white p-2 py-4 items-center shadow-2xl">
              <i className='bx bxl-google-cloud text-3xl text-black font-bold'  ></i>
              <p className="text-primary font-bold text-xl">Community</p>
            </div>

            <div class="flex flex-col my-auto w-full ten:w-[15%]  bg-white p-2 py-4 items-center shadow-2xl">
              <i className='bx bxl-google-cloud text-3xl text-black font-bold'  ></i>
              <p className="text-primary font-bold text-xl">Sustainability</p>
            </div>

            <div class="flex flex-col my-auto w-full ten:w-[15%]  bg-white p-2 py-4 items-center shadow-2xl">
              <i className='bx bxs-traffic-barrier text-3xl text-black font-bold'  ></i>
              <p className="text-primary font-bold text-xl">Integrity</p>
            </div>

          </div>

        </div>
      </div>
      {/* ..... */}
      <div style={{ background: "linear-gradient(to bottom, rgba(21, 27, 25, 0.8), rgb(114 112 112 / 92%))" }} className=" h-[40vh] flex items-center justify-center">
        <div className="w-[90%] nine:w-[80%] mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 w-[90%] nine:w-[80%] mx-auto px-[10px] ">
            <h1 className="text-4xl text-center font-bold text-white">Quality service for clients</h1>
            <p style={{ fontFamily: "cursive" }} className="text-white text-center">Work is Worship, Customers are God to us, so we provide best services than any other company as we can see from our customer's perspective and understand what needs to be done and deliver satisfactory result.</p>
          </div>

        </div>

      </div>

      {/* ...... */}

      <div className="w-[90%] nine:w-[60%] mx-auto mt-[40px] ">
        <div className="py-[2rem]">
          <h1 className="text-green-800">Awesome Features</h1>
          <h1 className="text-primary text-3xl font-bold">Why Choose Us<span className="text-black">.</span></h1>
        </div>
        <div className="flex flex-col six:flex-row   gap-6 flex-wrap">
          {
            aboutData.map((item) => (
              <div className="w-[90%] six:w-[45%] mx-auto">
                <i className={`${item.icon} text-xl`} ></i>
                <h2 className="uppercase text-primary font-bold text-2xl">{item.title}</h2>
                <p className="text-gray-500 mt-[10px]">{item.description}</p>
              </div>
            ))
          }

        </div>

      </div>
      {/* ....... */}
<div className="mt-[2rem]">

      <Footer/>
</div>
    </div>
  )
}

export default About
