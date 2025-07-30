import React, { useState } from 'react'
import Title from '../../Components/owner/Title';
import { assets } from '../../assets/assets';

const AddCar = () => {

  
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

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
  }



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



    </form>
   </div>
    </div>
  )
}

export default AddCar
