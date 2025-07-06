import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';

const CarDetails = () => {


  const {id} = useParams();
  const navigate = useNavigate();
  const [Car , setCar] = useState(null);


  useEffect(()=>{
  setCar(dummyCarData . find(Car => Car._id === id))
  } ,
  // when the id change the url will be automatically change
  [id])
   
  // if there is a car to return this otherwise run the else statement
  return Car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>

      <button onClick={()=> navigate(-1)} type='button' className='flex items-center mb-5 gap-3 text-md text-gray-500 cursor-pointer px-8'>
        <img src={assets.arrow_icon} alt="back to all cars button img"  className='rotate-180 opacity-50'/>
      Back to all Cars
        
        </button>

        
        {/* form details and data show */}
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
         
       {/* left car image & details */}
      <div className='col-span-2'>
      <img src={Car.image} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-lg'/>
       
       <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>{Car.brand} {Car.modal}</h1>
      <p className='text-gray-500 text-lg'>{Car.category} • {Car.year}</p>
       </div>
      
      <hr className='border-border-color my-6' />

       <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
         
         {
          [
          {icon: assets.users_icon, text:`${Car.seating_capacity} Seats`},
          {icon: assets.fuel_icon, text: Car.fuel_type },
          {icon: assets.location_icon, text: Car.location},
        ].map(({icon, text})=>(
          <div key={text} className='flex flex-col items-center bg-light p-4 rounded-lg'>
           <img src={icon} alt="" className='h-5 mb-2'/>

           {text}
          </div>
        ))}
       </div>
       
       {/* description */}

       <div>
        <h1 className='text-xl font-medium mb-3 mt-3'>Description</h1>
        <p className='text-gray-500'>{Car.description}</p>
       </div>
       
      
      {/* features */}
      <div>
         <h1 className='text-xl font-medium mb-3 mt-3'>Features</h1>
         <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          {
            ["360 camera" , "Bluetooth", "Gps" , "Heated Seats" , "Rare View Mirror"].map((item)=>(
              <li key={item} className='flex items-center text-gray-500'>
                <img src={assets.check_icon} className='h-4 mr-2' alt="" />
                {item}
              </li>
            ))
          }
         </ul>
      </div>

      </div>

       {/* right booking form */}
      

        </div>


    </div> 
  ): <p>Loading</p>
}

export default CarDetails
