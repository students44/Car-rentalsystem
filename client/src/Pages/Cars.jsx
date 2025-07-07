import React, { useState } from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const Cars = () => {



  const [input, setInput]= useState();



  return (
    <div>
      
      {/* search bar  section*/}
       <div className='flex flex-col items-center py-20 bg-gray-100 max-md:px-4'>
        <Title title='Available Cars' subtitle='A Seamless and User-Friendly Platform to Rent Cars Effortlessly, 
        Offering a Wide Range of Vehicles to Suit Every Journey and Budget'/>




        {/* search box */}

        <div className='flex items-center bg-white px-4 mt-6 max-w-170 w-full h-14 rounded-2xl shadow '>
          <img src={assets.search_icon} alt=""  className='w-5  h-5 mr-2'/>


           <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Search by modal or features' className='w-full h-full outline-none
           text-gray-500 rounded' />


          <img src={assets.filter_icon} alt=""  className='w-5  h-5 mr-2'/>
        </div>
       </div>



       {/* total number of cars */}
       <div></div>

    </div>
  )
}

export default Cars
