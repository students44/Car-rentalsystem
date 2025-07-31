import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets';
import Title from '../../Components/owner/Title';
import Cars from '../Cars';

const ManageCars = () => {



  const Currency = import.meta.env.VITE_CURRENCY

  const [car , setCar] = useState([]);

  const fetchOwnerCar = async () => {
    // Set car state with dummy data from assets
    setCar(dummyCarData);
  }

  useEffect(() => {
    fetchOwnerCar();
  }, []);


  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      
     <Title  title="Manage cars"  subtitle="View All listed Cars, Update their details, or removed
     them from the booking Platform"/>
      
      {/* table */}
      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-gray-300 mt-6'>
    
        <table className='w-full border-collapse text-left text-sm text-gray-600 shadow-lg rounded-md'>
        <thead className='text-white' style={{ backgroundColor: '#AD86F0' }}>
        <tr className='border-b border-borderColor'>
          <th className='p-3 font-medium border-r border-borderColor'>Car</th>
          <th className='p-3 font-medium max-md:hidden border-r border-borderColor'>Category</th>
          <th className='p-3 font-medium border-r border-borderColor'>Price</th>
          <th className='p-3 font-medium max-md:hidden border-r border-borderColor'>Status</th>
          <th className='p-3 font-medium border-r border-borderColor'>Actions</th>
        </tr>
        </thead>

        <tbody>
         {car.map((car, index)=>(
          <tr key={index} className='border-b border-borderColor'>
            <td className='p-3 flex items-center gap-3 bg-gray-50'>
              <img src={car.image} alt={car.name} className='w-12 h-12 rounded-md object-cover aspect-square' />
              <span>{car.name}</span>
              <div className=' max-md:hidden'>
               <p className='font-medium'>{car.brand} {car.modal}</p>
               <p className='text-xs text-gray-500'>{car.seating_capacity} • {car.transmission}</p>
              </div>
            </td>

            <td className='p-3 max-md:hidden bg-gray-50'>
              <p className='capitalize px-3 max-md:hidden'>{car.category}</p>
            </td>

            <td className='p-3 max-md:hidden bg-gray-50'>
                <p className='capitalize'> {Currency}{car.pricePerDay}/Day </p>
            </td>

            <td className='p-3 max-md:hidden bg-gray-50'>
          <span className={`px-2 py-1 rounded-full text-xs ${car.isAvaliable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {car.isAvaliable ? 'Available' : 'Not Available'}
          </span>
            </td>

           <td className='p-3 flex items-center gap-2 bg-gray-50'>
            <img src={car.isAvaliable ? assets.eye_close_icon : assets.eye_icon} alt=""  className='cursor-pointer'/>
            <img src={ assets.delete_icon}alt=""  className='cursor-pointer'/>
           </td>
          </tr>
         ))}
        </tbody>
        </table>

      </div>

    </div>
  )
}

export default ManageCars
