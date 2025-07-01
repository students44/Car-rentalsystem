import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'


const Hero = () => {

  const [pickUpLocation, setPickuPLocation] = useState("");

  return (
   <div className="h-screen flex flex-col items-center justify-center gap-14 bg-gray-100 text-center">
      
      <h1 className='text-4xl md:text-5xl font-semibold'>Luxury Car on Rent</h1>

      <form action="" className='flex flex-col h-30 md:flex-row items-start md:items-center justify-between
      p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0,1)]' >
     
       <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
        <div>
          <select name="" id="" required className='py-2'  onChange={(e) => setPickuPLocation(e.target.value)}>
            <option value="">Pick up location</option>
            {cityList.map((e)=> <option value={e}>{e}</option>)}
          </select>
          <p className='px-1 text-sm text-gray-500'> {pickUpLocation ? pickUpLocation : 'Please select Location'}  </p>
        </div>
       </div>
     

      </form>

      <img src={assets.main_car} alt="hero main car" className='max-h-74'  />
    </div>
  )
}

export default Hero
