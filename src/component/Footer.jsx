import React from 'react'
import logo from "../assets/tackles-logo.png"
import { useNavigate } from 'react-router'

const Footer = () => {
    const navigate=useNavigate();

    return (

        <footer className='bg-primary text-white'>
            <div className='w-[90%] nine:w-[70%] mx-auto bg-white py-[10px]'>
                <div className='p-4  flex gap-6 justify-around flex-wrap'>

                <div className='items-center  flex gap-2'  >
                <i className="bx bx-map-alt text-3xl  text-black"></i>
                <span className='text-primary'>|</span>
                <div className='ml-[5px]'>
                    <h1 className='text-xl font-semibold text-black'>Visit Us</h1>
                    <p className='text-gray-500'>Dubai, United Arab</p>
                    <p className='text-gray-500'>Emirates</p>
                </div>
                </div>
                

                <div className='items-center flex gap-2'  >
                <i className="text-black bx bx-envelope text-3xl" ></i>
                <span className='text-primary'>|</span>
                <div className='ml-[5px]'>
                    <h1 className='text-xl font-semibold text-black'>Email Us</h1>
                    <p className='text-gray-500'>info@tackles.ae</p>
                </div>
                </div>

                <div className='items-center flex gap-2'  >
                <i className="text-black bx bx-phone-call text-3xl"></i>
                <span className='text-primary'>|</span>
                <div className='ml-[5px]'>
                    <h1 className='text-xl font-semibold text-black'>Call Us</h1>
                    <p className='text-gray-500'>+971-55-6165029</p>
                </div>
                </div>

                </div>
                </div>
                <div className='w-[90%] nine:w-[80%] mx-auto footer-item-grid mt-[2.5rem]'>

                    <div className="item flex flex-col ten:flex-row items-center mt-[-1.2rem] ">
                     <img src={logo} alt="CompanyLogo" className="cursor-pointer " onClick={()=>navigate('/')} />
                     <div >
                     <h1 className='text-2xl text-white font-semibold'>Tackles</h1>
                     <p className='text-white'>Tackles is a leading of A-grade handyman providing company. Any repair or decoration work, whether it be Plumbing, Painting, Airconditioning, Floor and Wall fixing, and so on, Tackles is there for you.</p>
                     </div>
                    </div>

                    <div className="item flex flex-col  gap-1">
                        <h1 className='font-semibold text-2xl'>Browse More</h1>
                        <p className='cursor-pointer hover:font-bold mt-[5px]' onClick={()=>navigate('/team')}>Team</p>
                        <p className='cursor-pointer hover:font-bold' onClick={()=>navigate('/reviews')}>Testimonials</p>
                        <p className='cursor-pointer hover:font-bold' onClick={()=>navigate('/faq')}>FAQs</p>
                        <p className='cursor-pointer hover:font-bold' onClick={()=>navigate('/privacy')}>Privacy Policy</p>
                        <p className='cursor-pointer hover:font-bold' onClick={()=>navigate('/tos')}>Terms of Service</p>
                        <p className='cursor-pointer hover:font-bold' onClick={()=>navigate('/tos')}>Disclaimer</p>
                    </div>

                    <div className="item flex flex-col gap-1">
                        <h1 className='font-semibold text-2xl'>Services</h1>
                        <p className='cursor-pointer hover:font-bold mt-[5px]'>Air Conditioning</p>
                        <p className='cursor-pointer hover:font-bold'>Air Filtration</p>
                        <p className='cursor-pointer hover:font-bold'>Electromechanical Equipment</p>
                        <p className='cursor-pointer hover:font-bold'>Carpentry and Flooring</p>
                        <p className='cursor-pointer hover:font-bold'>Engraving and Ornamentation</p>
                        <p className='cursor-pointer hover:font-bold'>Plaster and Cladding</p>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center mt-[2.5rem]'>
                    <p>© 2018 - 2025 Tackles Technical LLC. All Rights Reserved</p>
                    <p>Technology Partner : Sriyog</p>
                </div>
              
           
        </footer>

    )
}

export default Footer
