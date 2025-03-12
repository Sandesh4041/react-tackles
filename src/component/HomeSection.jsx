import React from 'react'
import 'boxicons/css/boxicons.min.css';
import google from "../assets/google.png";
import serviceOne from "../assets/serviceOne.png";
import serviceTwo from "../assets/serviceTwo.png";
import serviceThree from "../assets/serviceThree.png";
import { useNavigate } from 'react-router';
import Accordian from './Accordian';
import frontPage from "../assets/frontpage.jpg";
import Testimonial from './Testimonial';
import Footer from './Footer';

const HomeSection = () => {
    const navigate=useNavigate()
    const services = [
        {
            "id": 1,
            "image": serviceOne,
            "title": "Painting",
            "description": "If you are looking for painting service, we offer expert consultation on colours, materials and budgets to make sure you get what you want. Our professionals are highly skilled and will deliver a satisfying painting experience."
        },
        {
            "id": 2,
            "image": serviceTwo,
            "title": "Air Conditioning & Filtering",
            "description": "Tackles has full service air filtration and conditioning expertise, we are equipped with the right tools and people to make sure that you would be in adequate temperature and breathe clean air."

        }, {
            "id": 3,
            "image": serviceThree,
            "title": "Plaster & Cladding",
            "description": "Tackles will take care of your plaster and cladding work on both interior and exterior part of your house, appartment or villa with full professionality. Whether it is a leaking celling or damaged floor/wall, our professionals will fix it with best result."
        }
    ]
    return (
        <div>
            <div className='w-[90%] nine:w-[70%] mx-auto flex flex-col ten:flex-row justify-center items-center gap-4 ten:justify-between bg-primary p-4'>
                <div className='flex gap-2 items-center'>
                    <i className="bx bx-buildings" style={{ color: 'white' }}></i>
                    <p className='text-yellow-300'>|</p>
                    <div className='text-white'>
                        <p>Download Our App</p>
                        <p className='font-bold'>Book Our Services And Special Offers</p>
                    </div>
                </div>
                <div>
                    <img src={google} width="241.75" height="72.5" alt='playstore' className='cursor-pointer max-w-[240px] max-h-[76px]' />
                </div>
            </div>
            <div className="w-[90%] nine:w-[70%] mx-auto mt-[35px]">
                <div className='w-full items-center flex flex-col  justify-center'>
                    <p className='text-green-700'>What We Can Do ?</p>
                    <h1 className='text-primary font-bold text-3xl'>Our Services</h1>
                    <div className='mt-[15px] w-[80%] mx-auto'>
                        <p className='text-primary text-center' style={{ fontFamily: "Satisfy,cursive" }}>Tackles is a leading of A-grade handyman providing company. Any repair or decoration work, whether it be Plumbing, Painting, Airconditioning, Floor and Wall fixing, and so on, Tackles is there for you.</p>
                    </div>
                </div>

                <div className='flex gap-6 flex-wrap p-4'>
                    {services.map((service) => (
                        <>
                            <div key={service.id} className='flex-1 w-full px-6 nine:min-w-[200px] nine:max-w-[30%] mx-auto items-center'>
                                <img src={service.image} alt="serviceImage" className='' />
                                <h1 className='text-3xl text-primary font-bold'>{service.title}</h1>
                                <p className='mt-[10px] font-semibold text-gray-500'>{service.description}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className='flex justify-center mt-[15px]'>
                    <button className='hover:bg-green-900 bg-primary py-3 px-5 rounded-lg text-white font-bold ' onClick={()=>navigate('/service')} >All Services</button>
                </div>
                <div className='mt-[40px] flex flex-col justify-center items-center'>
                    <p className='text-primary'>All About Us</p>
                    <h1 className='text-primary font-bold text-3xl'>Our Story</h1>
                    <div className='w-[80%] mx-auto'>
                    <p className='mt-[20px] text-primary text-center ' style={{fontFamily:'cursive'}}>Hard labour works like Plumbing, AC installation, Cladding and plastering requires not only hard work but good skill too. Thats where we come with our team to get you rid of that problem.</p>
                    </div>
                </div>
                <div className='mt-[50px] flex w-[90%]  gap-6  mx-auto'>
                    <div className='w-full xl:flex-1'>
                    <Accordian/>
                    </div>
                    <div className='flex-1'>
                    <img src={frontPage} alt="frontPage" className=' hidden xl:block' />
                    </div>
                </div>
            </div>
            <div>
                <Testimonial/>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
    )
}

export default HomeSection
