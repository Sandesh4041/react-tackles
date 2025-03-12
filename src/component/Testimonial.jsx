import React, { useEffect, useState } from 'react'

const Testimonial = () => {
    const [data, setData] = useState([])
    const [visibileData, setVisibileData] = useState([1])
    const len = data.length;
    const [currentPage, setCurrentPage] = useState(1)
    const lastIndex = currentPage * visibileData;
    const firstIndex = lastIndex - visibileData;
    const totalLength = Math.ceil(len / visibileData);


    useEffect(() => {
        fetch('/testimonial.json')
            .then((res) => res.json())
            .then((data) => setData(data))

        const handleVisibileData = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setVisibileData(1)
            }
            else if (width < 1100) {
                setVisibileData(2)
            }
            else if (width < 2200) {
                setVisibileData(3)
            }
            else {
                setVisibileData(4)
            }
        }
        handleVisibileData();
        window.addEventListener('resize', handleVisibileData);
        return () => window.removeEventListener('resize', handleVisibileData);
    }, [])
    // console.log(visibileData)

    return (
        <div className=' bg-gray-100 pb-[40px]'>
            <div>
                <div className="flex flex-col  justify-center items-center pt-[80px]">
                    <h4 className='text-primary  text-xl'>What Peopole Say?</h4>
                    <h1 className='text-primary text-3xl font-bold'>Testimonials</h1>
                </div>

                <div className='w-[95%] seven:w-[90%] xl:w-[80%] mx-auto'>
                    <div className='mt-[100px] flex gap-6 w-full justify-center items-center'>
                        {
                            data.slice(firstIndex, lastIndex).map((item) => (
                                <>
                                    <div key={item.id}>
                                        <div className='bg-white p-6  h-[230px] relative   '>
                                            <img src={item.image} alt="one" className='w-[80px] h-[80px] absolute top-[-20%] left-[30%]' />
                                            <i className='bx-pull-left bx bxs-quote-alt-left bx-lg text-green-400' />
                                            <p className='pt-[40px]'>{item.description}</p>
                                        </div>

                                        <div className='flex justify-center'>
                                            <p className='font-bold text-xl'>{item.name}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }


                    </div>
                    <div className="flex justify-center gap-2 mt-[20px]">
                        {Array.from({ length: totalLength }, (_, i) => i + 1).map((item) => (
                            <span
                                key={item}
                                className={` h-[10px] w-[10px] hover:bg-green-900 p-2 rounded-md cursor-pointer ${currentPage === item ? 'bg-green-900' : 'bg-gray-400'}`}
                                onClick={() => setCurrentPage(item)}  // Set current page to the page number
                            >

                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
