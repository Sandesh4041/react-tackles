import { useEffect, useState } from "react"
import Nav from "../component/Nav"
import servcieOne from "../assets/serviceOne.png"
import Footer from "../component/Footer";


const Service = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(()=>{
    fetch('/service.json')
    .then((res)=>res.json())
    .then((data)=>setServiceData(data))
  },[])

  return (
    <div>
      <Nav/>
      <div className=" h-[50vh]" style={{ background: "linear-gradient(to bottom, rgba(25, 23, 23, 0.8), rgba(34, 34, 34, 0.2))" }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <div className="flex gap-2">
            <h1 className="text-white">Home /</h1>
            <p className="text-primary"> Services</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] nine:w-[80%] mx-auto mt-[50px] flex flex-col items-center justify-center">
        <h1 className="text-green-500">What We Can Do ?</h1>
        <h1 className="text-primary font-bold text-3xl" >Our Services</h1>
        <p className="text-center  text-primary mt-[30px]" style={{ fontFamily: "Satisfy,cursive" }}>Tackles is a leading of A-grade handyman providing company. Any repair or decoration work, whether it be Plumbing, Painting, Airconditioning, Floor and Wall fixing, and so on, Tackles is there for you.</p>
      </div>

      <div className="w-[90%] nine:w-[80%] mx-auto mt-[40px] flex seven:flex-row flex-col gap-6 flex-wrap  ">
        {
          serviceData.map((item)=>(

            <div key={item.id} className="w-[85%] seven:w-[30%] mx-auto">
            <img src={item.icon} alt="service" className="max-h-[150px] " />
            <h1 className="text-primary mt-[10px] font-bold text-2xl">{item.title}</h1>
            <p className="text-gray-500 mt-[10px]">{item.description}</p>
            </div>
          ))
        }


      </div>
      <div className="mt-[2rem]">
        <Footer/>
      </div>

    </div>
  )
}

export default Service
