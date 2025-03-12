import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Accordian = () => {
    const [tackles,setTackles]=useState(false)
    const[mission,setMission]=useState(false)
    const[goal,setGoal]=useState(false)

    const handleAccordian=(value)=>{
        if(value==="tackles"){
            setTackles(!tackles)
            setMission(false)
            setGoal(false)
        }
        else if(value==="mission"){
            setTackles(false)
            setMission(!mission)
            setGoal(false)
        }
        else{
            setTackles(false)
            setMission(false)
            setGoal(!goal)
        }
    }
  return (
    // w-[80%] xl:w-[40%]
    <div className='flex flex-col items-center  mx-auto'>
        <div className='border border-gray-300 p-6 w-full '>
      <div className='flex justify-between w-full items-center '>
        <h1 className='text-primary font-semibold text-xl'>About Tackles</h1>
        <span className='bg-primary text-white p-1 cursor-pointer' onClick={()=>handleAccordian('tackles')}>{tackles?<FaMinus/>:<FaPlus/>}</span>
      </div>
      {
        tackles?<p className='text-gray-500 font-semibold mt-[10px]'>Tackles is a leading of A-grade handyman providing company. Any repair or decoration work, whether it be Plumbing, Painting, Airconditioning, Floor and Wall fixing, and so on, Tackles is there for you.</p>:null
      }
        </div>

        <div className='border border-gray-300 p-6 w-full mt-[10px] '>
      <div className='flex justify-between w-full items-center '>
        <h1 className='text-primary font-semibold text-xl'>Our Mission</h1>
        <span className='bg-primary text-white p-1 cursor-pointer' onClick={()=>handleAccordian('mission')}>{mission?<FaMinus/>:<FaPlus/>}</span>
      </div>
      {
        mission?<p className='text-gray-500 font-semibold mt-[10px]'>We want to provide every repair or decoration and design services so that you don't need to go through the problem of searching different place for different service.</p>:null
      }
        </div>

        <div className='border border-gray-300 p-6 w-full mt-[10px]'>
      <div className='flex justify-between w-full items-center '>
        <h1 className='text-primary font-semibold text-xl'>Our Goals</h1>
        <span className='bg-primary text-white p-1 cursor-pointer' onClick={()=>handleAccordian('goal')}>{goal?<FaMinus/>:<FaPlus/>}</span>
      </div>
      {
        goal?<p className='text-gray-500 font-semibold mt-[10px]'>Tackles focuses on providing our clients the best service anyone can provide and make your lives convenient and comfortable. Any work related to either plumbing, painting, plastering or equipment installation like AC and Purifier is our problem.</p>:null
      }
        </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Accordian
