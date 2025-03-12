import Nav from "../component/Nav"
import gallery from "../assets/gallery.jpg"
import galleryOne from "../assets/galleryOne.jpg"
import galleryTwo from "../assets/galleryTwo.jpg"
import galleryThree from "../assets/galleryThree.jpg"
import galleryFour from "../assets/galleryFour.jpg"
import galleryFive from "../assets/galleryFive.jpg"
import gallerySix from "../assets/gallerySix.jpg"
import gallerySeven from "../assets/gallerySeven.jpeg"
import galleryEight from "../assets/galleryEight.jpeg"
import galleryNine from "../assets/galleryNine.jpeg"
import galleryTen from "../assets/galleryTen.jpeg"
import galleryEleven from "../assets/galleryEleven.jpeg"
import galleryTwelve from "../assets/galleryTwovel.jpeg"
import Footer from "../component/Footer"
import { useState } from "react"

const Gallery = () => {
  const [selectedImage,setSeletedImage] = useState(null)

  const handleImage=(event)=>{
    setSeletedImage(event.target.src)
  }

  console.log(selectedImage);
  return (
    <div>
      <Nav />
      <div>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(25, 23, 23, 0.8), rgba(34, 34, 34, 0.2)),url(${gallery})`, backgroundSize: "cover", backgroundPosition: "center", }} className={`flex justify-center items-center h-[50vh] w-[100%]`}>
          <div className="">
            <h1 className="text-white font-bold text-3xl">Gallery</h1>
            <p className="text-white">Home / <span className="text-primary">Gallery</span></p>
          </div>
        </div>

        <div className="w-[90%] nine:w-[80%] mx-auto mt-[50px] flex flex-col items-center justify-center">
          <h1 className="text-green-500">Great And Awesome Works</h1>
          <h1 className="text-primary font-bold text-3xl" >Sample Works<span className="text-blue-900">.</span></h1>
          <p className="text-center  text-primary mt-[30px]" style={{ fontFamily: "Satisfy,cursive" }}>You can view our working quality and decide for yourselves whether we are best for you. All of the repair and decoration work, people feel so hard to do comes natural to our professionals.</p>
        </div>

        <div className="w-[90%] nine:w-[80%] mx-auto mt-[40px]"> 

          <div className="gallery ">
          <img src={galleryOne} alt="one" onClick={handleImage} />
          <img src={galleryTwo} alt="one" onClick={handleImage}/>
          <img src={galleryThree} alt="one" onClick={handleImage}/>
          <img src={galleryFour} alt="one" onClick={handleImage}/>
          <img src={galleryFive} alt="one" onClick={handleImage}/>
          <img src={gallerySix} alt="one" onClick={handleImage}/>
       
        
          <img src={gallerySeven} alt="one" onClick={handleImage}/>
          <img src={galleryEight} alt="one" onClick={handleImage}/>
          <img src={galleryNine} alt="one" onClick={handleImage}/>
          <img src={galleryTen} alt="one" onClick={handleImage}/>
          <img src={galleryEleven} alt="one" onClick={handleImage}/>
          <img src={galleryTwelve} alt="one" onClick={handleImage}/>
          </div>
        

        </div>
        <div>
          {selectedImage && <div className="popUp fixed top-0 w-[100%] h-[100%] z-[1000] ">
            <div className="flex justify-center h-full items-center relative">
            <img src={selectedImage} alt="selected" className="max-w-[300px] max-h-[250px]"/>
            </div>
            <button onClick={()=>setSeletedImage(null)} className="absolute top-5 right-4 px-2 bg-red-400 rounded-lg text-white">X</button>
            </div>
            }
        </div>

      </div>
      <div className="mt-[2rem]">
        <Footer/>
      </div>
    </div>
  )
}

export default Gallery
