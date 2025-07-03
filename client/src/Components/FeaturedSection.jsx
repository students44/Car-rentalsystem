import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import Carcard from './Carcard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {

 

    const navigate = useNavigate()




  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      

      <div>
        <Title title='Features Vehicles' subtitle= 'Explore our selection of premium Vehicles available for Your next adventure'/>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>

    {
        dummyCarData.slice(0,8) .map((car)=>(
            <div key={car._id}>
               <Carcard  car={car}/>
            </div>
        ))
    }
      </div>


      <button className='flex items-center justify-center gap-3 px-6 py-2 border-border-color
      hover:bg-gray-50 rounded-md mt-18 cursor-pointer' onClick={()=>{
        navigate('/car'); screenTop(0,0)
      }}>
        Explored All cars <img src={assets.arrow_icon} alt="explore car arrow icon" />
      </button>
    </div>
  )
}

export default FeaturedSection
