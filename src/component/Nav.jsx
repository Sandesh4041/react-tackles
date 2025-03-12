import { useNavigate } from "react-router-dom"
import facebookIcon from "../assets/facebook.svg"
import logo from "../assets/tackles-logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";


const Nav = () => {
  const[hamburger,setHamburger]=useState(false)
  const[isScroll,setIsScroll]=useState(false)
    const navigate=useNavigate()

    useEffect(()=>{
      const handleScroll=()=>{
      if(window.scrollY>60){
        setIsScroll(true)
      }
      else{
        setIsScroll(false)
      }
    }
window.addEventListener('scroll',handleScroll)
return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <>
   
    <div>
        {/* upper nav bar  */}
        <div className="p-4 flex justify-center four:justify-around" style={{backgroundColor:"green"}}>
            <div className="hidden four:block text-white items-center">
                <span >Phone:<a href="tel:055-6165029" target="blank">
            055-6165029</a></span>
                <span className="ml-[15px]">Email: <a href="mailto:info@tackles.ae" target="blank">info@tackles.ae</a></span>
            </div>

            <div>
                <a href="https://www.facebook.com/www.tackles.ae" target="blank"><img  className="bg-white rounded-full" src={facebookIcon} alt=""></img></a>
            </div>
        </div>


<div className={`${isScroll?"fixed top-0 shadow-md":"relative"} bg-white w-full z-50`}>
      <nav className="relative flex justify-around items-center p-4 " >
      <img src={logo} alt="CompanyLogo" className="cursor-pointer w-[216px] h-[43px]" onClick={()=>navigate('/')} />
      <span className="nine:hidden block ml-auto text-green-500 p-2" onClick={()=>setHamburger(!hamburger)}>
          <GiHamburgerMenu/>
          </span>
          {
            hamburger?  <div className="w-full z-[10] four:w-[60%] absolute top-[80px] right-0  block nine:hidden">
            <ul className="flex flex-col justify-center items-center gap-3  text-white p-2 " style={{backgroundColor:"green"}}>
            
          <li onClick={()=>navigate('/')}>HOME</li>
            <li onClick={()=>navigate('/aboutus')}>ABOUT US</li>
            <li onClick={()=>navigate('/service')}>SERVICE</li>
            <li onClick={()=>navigate('/gallery')}>GALLERY</li>
            <li onClick={()=>navigate('/appointment')}>BOOK AN APPOINTMENT</li>
            <li onClick={()=>navigate('/contact')}>CONTACT</li>
              
            </ul>
          </div>:null
          }
        
      <div className="hidden nine:block">
        <ul className="flex gap-6 text-green-600 font-bold">
            <li onClick={()=>navigate('/')} className="">HOME</li>
            <li onClick={()=>navigate('/aboutus')}>ABOUT US</li>
            <li onClick={()=>navigate('/service')}>SERVICE</li>
            <li onClick={()=>navigate('/gallery')}>GALLERY</li>
            <li onClick={()=>navigate('/appointment')}>BOOK AN APPOINTMENT</li>
            <li onClick={()=>navigate('/contact')}>CONTACT</li>
        </ul>
      </div>
      </nav>
      </div>
    </div>
    <div className="fixed bottom-[20%] right-[5%] flex justify-center items-center z-[200] ">
<span className="w-[60px] p-4 h-[60px] rounded-full cursor-pointer bg-primary"><i className=' bx bxl-whatsapp text-white text-3xl'></i></span>

    </div >
    </>
  )
}

export default Nav
