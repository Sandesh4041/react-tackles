import React, { useEffect, useState } from 'react';
import left from "../assets/left.png";
import right from "../assets/right.png";

const BackgroundImage = () => {
    const [backgroundData, setBackgroundData] = useState([]);
    const[startIndex,setStartIndex]=useState(0)
    const[endIndex,setEndIndex]=useState(1)

    const handleNext=()=>{
        if(endIndex<backgroundData.length){
            setStartIndex(startIndex+1)
            setEndIndex(endIndex+1)
        }
        else{
            setStartIndex(0)
            setEndIndex(1)
        }
        
    }

    const handlePrev=()=>{
        if(startIndex>0){
            setStartIndex(startIndex-1)
            setEndIndex(endIndex-1)
        }
        else{
            setStartIndex(backgroundData.length-1)
            setEndIndex(backgroundData.length) 
        } 
    }

    useEffect(() => {
        fetch('/background.json')
            .then((res) => res.json())
            .then((data) => setBackgroundData(data));
    }, []);

    return (
        <>
            {backgroundData && backgroundData.slice(startIndex,endIndex).map((item, index) => (
                <div key={index} className="relative h-[80vh] w-[100%]" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    {/* Card section */}
                    <div className='bg-white max-w-[300px] absolute top-[30%] left-[4%] nine:left-[20%] p-6'>
                        <p className='text-green-600'>{item.title}</p>
                        <hr className='mt-[10px]' />
                        <h1 className='text-primary font-bold mt-[10px]'>{item.description}</h1>
                        <ul className='flex gap-2 mt-[10px]'>
                            <li className='bg-primary hover:bg-green-950 text-white p-2 rounded-md'><a href="service">More Services</a></li>
                            <li className='bg-primary hover:bg-green-950 text-white p-2 rounded-md'><a href="appointment">Book a Service</a></li>
                        </ul>
                    </div>

                    {/* Arrow section */}
                    <div className='flex gap-4 absolute bottom-[10%] left-[2%] nine:left-[10%]'>
                        <div className='bg-primary hover:bg-green-950 rounded-md p-4' onClick={handlePrev}>
                            <img src={left} alt="left" />
                        </div>
                        <div className='bg-primary hover:bg-green-950 rounded-md p-4' onClick={handleNext}>
                            <img src={right} alt="right" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BackgroundImage;
