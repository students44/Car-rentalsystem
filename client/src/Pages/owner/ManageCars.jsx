import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets';
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
      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-color mt-6'>
    
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
        <thead className='text-gray-500'>
        <tr>
          <th className='p-3 font-medium'>Car</th>
          <th className='p-3 font-medium max-md:hidden'>Category</th>
          <th className='p-3 font-medium'>Price</th>
          <th className='p-3 font-medium max-md:hidden'>Status</th>
          <th className='p-3 font-medium'>Actions</th>
        </tr>
        </thead>

        <tbody>
         {car.map((car, index)=>(
          <tr key={index} className='border-top border-borderColor'>
            <td className='p-3 flex items-center gap-3'>
              <img src={car.image} alt={car.name} className='w-12 h-12 rounded-md object-cover aspect-square' />
              <span>{car.name}</span>
              <div className=' max-md:hidden'>
               <p className='font-medium'>{car.brand} {car.modal}</p>
               <p className='text-xs text-gray-500'>{car.seating_capacity} • {car.transmission}</p>
              </div>
            </td>

            <td className='p-3 max-md:hidden'>
              <p className='capitalize px-3 max-md:hidden'>{car.category}</p>
            </td>

            <td className='p-3 max-md:hidden'>
                <p className='capitalize'> {Currency}{car.pricePerDay}/Day </p>
            </td>

            <td className='p-3 max-md:hidden'>
          <span className={`px-2 py-1 rounded-full text-xs ${car.isAvaliable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {car.isAvaliable ? 'Available' : 'Not Available'}
          </span>
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
