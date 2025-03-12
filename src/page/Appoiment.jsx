import Footer from "../component/Footer";
import Nav from "../component/Nav"
import { useState } from "react";


const Appoiment = () => {
  const [countryCode, setCountryCode] = useState("+977"); // Default to Nepal
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    startDate: "",
    endDate: "",
    shift: "",
    priority: "",
    location: "",
    service: "",
    phoneNumber: "",
    budget: "",
    emirates: "",
    description: "",
  });
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };
   
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <Nav />
      <div className=" h-[50vh]" style={{ background: "linear-gradient(to bottom, rgba(25, 23, 23, 0.8), rgba(34, 34, 34, 0.2))" }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white">Book A Service</h1>
          <div className="flex gap-2">
            <h1 className="text-white">Home /</h1>
            <p className="text-primary"> BOOK AN APPOINTMENT</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="text-primary text-3xl font-bold mt-[3rem]">Book An Appointment</h1>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-[2rem]">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-medium">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" required onChange={handleChange} className="p-2 border rounded" />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input type="email" name="email" required onChange={handleChange} className="p-2 border rounded" />
          </div>

          {/* Start Date */}
          <div className="flex flex-col">
            <label className="font-medium">Start Date <span className="text-red-500">*</span></label>
            <input type="date" name="startDate" required onChange={handleChange} className="p-2 border rounded" />
          </div>

          {/* End Date */}
          <div className="flex flex-col">
            <label className="font-medium">End Date <span className="text-red-500">*</span></label>
            <input type="date" name="endDate" required onChange={handleChange} className="p-2 border rounded" />
          </div>

          {/* Shift Selection */}
          <div className="flex flex-col">
            <label className="font-medium">Shifts <span className="text-red-500">*</span></label>
            <select name="shift" required onChange={handleChange} className="p-2 border rounded">
              <option value="">Select Shift</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Priority Selection */}
          <div className="flex flex-col">
            <label className="font-medium">Priority <span className="text-red-500">*</span></label>
            <select name="priority" required onChange={handleChange} className="p-2 border rounded">
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
      <label className="font-medium">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <div className="flex">
        <select
          value={countryCode}
          onChange={handleCountryChange}
          className="p-2 border rounded-l"
        >
          <option value="+977">Nepal (+977)</option>
          <option value="+971">Dubai (+971)</option>
          <option value="+91">India (+91)</option>
          <option value="+86">China (+86)</option>
        </select>
        <input
          type="tel"
          name="phoneNumber"
          required
          onChange={handleChange}
          className="p-2 border rounded-r w-full"
          placeholder="Enter phone number"
        />
      </div>
    </div>

          {/* Budget */}
          <div className="flex flex-col">
            <label className="font-medium">Budget <span className="text-red-500">*</span></label>
            <select name="budget" required onChange={handleChange} className="p-2 border rounded">
              <option value="">Select Budget</option>
              <option value="Below AED 500">Below AED 500</option>
              <option value="Above AED 1k">Above AED 1k</option>
              <option value="Above AED 10k">Above AED 10k</option>
              <option value="Above AED 50k">Above AED 50k</option>
            </select>
          </div>

          {/* Emirates */}
          <div className="flex flex-col">
            <label className="font-medium">Emirates <span className="text-red-500">*</span></label>
            <select name="emirates" required onChange={handleChange} className="p-2 border rounded">
              <option value="">Select Emirates</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Ajman">Ajman</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Fujairah">Fujairah</option>
              <option value="Umm Al Quwain">Umm Al Quwain</option>
              <option value="Outside UAE">Outside UAE</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="font-medium">Description</label>
            <textarea name="description" onChange={handleChange} className="p-2 border rounded"></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
      <div className="mt-[2rem]">
        <Footer />
      </div>
    </div>
  )
}

export default Appoiment
