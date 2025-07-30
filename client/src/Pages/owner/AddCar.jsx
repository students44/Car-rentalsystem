import React, { useState } from 'react'
import Title from '../../Components/owner/Title';
import { assets } from '../../assets/assets';
import Swal from 'sweetalert2';


const AddCar = () => {

    const [list, setList] = useState(""); // ✅ Must be here inside the component
  // state for image

  const [image , setImage] = useState(null);

  // state for car 
  const [car ,  setCar] = useState({
    brand: '',
    modal: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '', 
    description: '',

  })

const onSubmitHandler = async (e) => {
  e.preventDefault();

  const {
    brand,
    modal,
    year,
    pricePerDay,
    category,
    transmission,
    fuel_type,
    seating_capacity,
    location,
    description,
  } = car;

  const missingFields = [];

  if (!brand.trim()) missingFields.push('Brand');
  if (!modal.trim()) missingFields.push('Model');
  if (!year || Number(year) <= 0) missingFields.push('Year');
  if (!pricePerDay || Number(pricePerDay) <= 0) missingFields.push('Price Per Day');
  if (!category) missingFields.push('Category');
  if (!transmission) missingFields.push('Transmission');
  if (!fuel_type) missingFields.push('Fuel Type');
  if (!seating_capacity || Number(seating_capacity) <= 0) missingFields.push('Seating Capacity');
  if (!location) missingFields.push('Location');
  if (!description.trim()) missingFields.push('Description');
  if (!image) missingFields.push('Image');

  if (missingFields.length > 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Incomplete Form',
      html: `Please fill in: <strong>${missingFields.join(', ')}</strong>`,
    });
    return;
  }

  try {
    console.log('Form submitted!');

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Car listed successfully!',
    });

    setCar({
      brand: '',
      modal: '',
      year: '',
      pricePerDay: '',
      category: '',
      transmission: '',
      fuel_type: '',
      seating_capacity: '',
      location: '',
      description: '',
    });

    setImage(null);
    setList('Car listed successfully!');
  } catch (error) {
    console.error('Form submission error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: 'Something went wrong while submitting the form.',
    });
  }
};





  const Currency = import.meta.env.VITE_CURRENCY



  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
     <Title  title= "Add New Car " subtitle= "Fill in details to list a new car for booking, including pricing, availability, and car specification"/>
   
   
   {/* booking form */}
   <div>
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-5
    text-gray-500 text-sm mt-6 max-w-xl'>
   
     

     {/* upload car image */}
     
     <div className='flex items-center gap-2 w-full'>
      <label htmlFor="car-image">
        <img src={ image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded  cursor-pointer' />

        <input
          type="file"
          id='car-image'
          accept='image/*'
          hidden
          onChange={e => setImage(e.target.files[0])}
        />
      </label>
      <p>Upload Picture of Your car</p>
     </div>

    {/* car brand / modal*/}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className="flex flex-col w-full">
        <label htmlFor="brand" className="mb-1 font-medium text-gray-700">Brand</label>
        <input
          id="brand"
          type="text"
          placeholder="Enter your car brand"
          value={car.brand}
          onChange={e => setCar({ ...car, brand: e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900 placeholder-gray-400"
        />
      </div>


   <div className="flex flex-col w-full">
        <label htmlFor="modal" className="mb-1 font-medium text-gray-700">price PerDay</label>
        <input
          id="pricePerDay"
          type="text"
          placeholder="Enter your car modal"
          value={car.modal}
          onChange={e => setCar({ ...car, modal: e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900 placeholder-gray-400"
        />
      </div>
    </div>



    {/* car year, price , category */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>


            <div className="flex flex-col w-full">
        <label htmlFor="year" className="mb-1 font-medium text-gray-700">Year </label>
        <input
          id="year"
          type="number"
          placeholder="Enter your car year"
          value={car.year}
          onChange={e => setCar({ ...car, year : e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900 placeholder-gray-400"
        />
      </div>
   
      <div className="flex flex-col w-full">
        <label htmlFor="pricePerDay" className="mb-1 font-medium text-gray-700">price PerDay ({Currency}) </label>
        <input
          id="pricePerDay"
          type="number"
          placeholder="Enter your car pricePerDay"
          value={car.pricePerDay}
          onChange={e => setCar({ ...car, pricePerDay : e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900 placeholder-gray-400"
        />
      </div>





      <div className="flex flex-col w-full">
        <label htmlFor="category" className="mb-1 font-medium text-gray-700">Category</label>
        <select
          id="category"
          value={car.category}
          onChange={e => setCar({ ...car, category: e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900"
        >
          <option value="" disabled>Select car category</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Convertible">Convertible</option>
          <option value="Coupe">Coupe</option>
          <option value="Wagon">Wagon</option>
          <option value="Van">Van</option>
          <option value="Pickup">Pickup</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>


    {/* Car transmission , Fuel type, Seating capacity */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>


      <div className="flex flex-col w-full">
        <label htmlFor="transmission" className="mb-1 font-medium text-gray-700">Transmission</label>
        <select
          id="transmission"
          value={car.transmission}
          onChange={e => setCar({ ...car, transmission: e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900"
        >
          <option value="" disabled>Select transmission type</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
          <option value="CVT">CVT</option>
          <option value="Semi-Automatic">Semi-Automatic</option>
          <option value="Dual-Clutch">Dual-Clutch</option>
          <option value="Tiptronic">Tiptronic</option>
          <option value="Other">Other</option>
        </select>
      </div>
   
      <div className="flex flex-col w-full">
        <label htmlFor="fuel_type" className="mb-1 font-medium text-gray-700">Fuel Type</label>
        <select
          id="fuel_type"
          value={car.fuel_type}
          onChange={e => setCar({ ...car, fuel_type: e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900"
        >
          <option value="" disabled>Select fuel type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="LPG">LPG</option>
          <option value="Other">Other</option>
        </select>
      </div>


      
      <div className="flex flex-col w-full">
        <label htmlFor="seating_capacity" className="mb-1 font-medium text-gray-700">Seating Capacity</label>
        <input
          id="seating_capacity"
          type="number"
          placeholder="Enter your car seating Capacity"
          value={car.seating_capacity}
          onChange={e => setCar({ ...car, seating_capacity : e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900 placeholder-gray-400"
        />
      </div>

    </div>
    

    {/* car location */}
     <div className='flex flex-col w-full'>
      <label htmlFor="Location" className="mb-1 font-medium text-gray-700">Location</label>
        <select
          id="Location"
          value={car.location}
          onChange={e => setCar({ ...car, location: e.target.value })}
          className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-sm bg-white text-gray-900"
        >
          <option value="" disabled>Choose your Location</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Rawalpindi">Rawalpindi</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Multan">Multan</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Quetta">Quetta</option>
          <option value="Sialkot">Sialkot</option>
          <option value="Gujranwala">Gujranwala</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Sukkur">Sukkur</option>
          <option value="Bahawalpur">Bahawalpur</option>
          <option value="Sargodha">Sargodha</option>
          <option value="Other">Other</option>
        </select>
     </div>
   
   {/* car description */}
    <div className='flex flex-col w-full'>
      <label htmlFor="Description">Description</label>
    <textarea rows={5}
          id="description"
          type="number"
          placeholder=" Enter Your car description here"
          value={car.description}
          onChange={e => setCar({ ...car, description : e.target.value })} 
          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
        />
    </div>



    {/* for submit button */}

    <button type='submit' className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white
    rounded-md font-medium w-max cursor-pointer' > 
      <img src={assets.tick_icon} alt="" />
      List Your car
    </button>
    </form>
   </div>

    </div>
  )
}

export default AddCar
