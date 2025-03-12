import Footer from "../component/Footer"
import Nav from "../component/Nav"
import cardImage from "../assets/cardImage.png";

const Contact = () => {
  return (
    <div>
      <Nav/>
      <div className="mapContent w-full h-[70vh] flex justify-center items-center">
      <div className="mapContainer w-full h-full">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7809.293607632653!2d55.23650021578456!3d25.079463209811937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6e9eb02dbf61%3A0x169f6cb2423f5e35!2sAl%20Barsha%20-%20Al%20Barsha%20South%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snp!4v1723644596126!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>


    <div className="container w-[90%] nine:w-[80%] mx-auto p-8 flex seven:flex-row flex-col  justify-around"> 
      <div>
      <div className="mb-8 w-full flex flex-col ">
        <span className="text-green-500 ">We wanna hear from you!</span>
        <h2 className="text-3xl font-bold">Contact Us.</h2>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="flex ">
          <i className='bx bx-map-pin text-2xl mr-4 text-blue-500'></i> 
          <div>
            <p className="font-medium">Visit us</p>
            <p>G 01 Ontario Tower Business Bay</p>
          </div>
        </div>
        <div className="flex "> 
          <i className='bx bx-envelope text-2xl mr-4 text-blue-500'></i>
          <div>
            <p className="font-medium">Email us</p>
            <p>info@tackles.ae</p>
          </div>
        </div>
        <div className="flex"> 
          <i className='bx bx-phone text-2xl mr-4 text-blue-500'></i>
          <div>
            <p className="font-medium">Call us</p>
            <p>+971-55-6165029</p>
          </div>
        </div>
      </div>
</div>
      <div className="card p-[5px] flex flex-col gap-2 max-w-[400px] items-start seven:items-center">
<img src={cardImage} alt="cardImage" className="max-w-[250px] h-auto rounded-full"/>
<h1 className="text-3xl font-bold">P.R.O</h1>
<p className="font-bold">Dibya Rajbhandari (She/Her)</p>
<p className="text-gray-400">pro@neurohospital.com.np</p>

<button className="flex mx-auto text-white bg-blue-600 rounded-lg px-2 py-2 items-center"><i className=" bx bxl-whatsapp text-2xl text-white"></i>whatsApp</button>


    </div>
    
    </div>

 

    <div className="mt-[2rem]">
      <Footer/>
    </div>
    </div>
  )
}

export default Contact
