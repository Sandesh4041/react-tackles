import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav'
import gallery from '../assets/background.jpg'
import Footer from '../component/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
fetch('/team.json')
.then((res)=>res.json())
.then((response)=>setData(response))
  },[])
  console.log(data)
  return (
    <div>
      <div>
        <Nav />
        <div>
          <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(25, 23, 23, 0.8), rgba(34, 34, 34, 0.2)),url(${gallery})`, backgroundSize: "cover", backgroundPosition: "center", }} className={`flex justify-center items-center h-[50vh] w-[100%]`}>
            <div className="">
              <h1 className="text-white font-bold text-3xl">Our Team</h1>
              <p className="text-white">Home / <span className="text-primary font-bold">Team</span></p>
            </div>
          </div>
          <div className="w-[90%] nine:w-[80%] mx-auto pt-[50px]">
            <div className='flex flex-wrap gap-5 ten:gap-9 justify-center '>
              {
                data.map((item)=>(
                  <>
 <div className="card bg-gray-100 shadow-lg p-3 rounded-lg hover:scale-[1.1] hover:cursor-pointer">
                  <img src={item.image} alt="teamOne" className='max-w-[200px] h-auto ' />
                  <h1 className='font-bold text-xl text-primary'>{item.name.toUpperCase()}</h1>
                  <p>{item.role}</p>
        
                <div className='flex gap-3'>
                <FontAwesomeIcon icon={faFacebook} size="x" />
                <FontAwesomeIcon icon={faTwitter} size="x" />
                <FontAwesomeIcon icon={faLinkedin} size="x" />
              </div>
              </div>
                  </>
                ))
              }
             
   
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[15px]'>
        <Footer />
      </div>
    </div>
  )
}

export default Team
