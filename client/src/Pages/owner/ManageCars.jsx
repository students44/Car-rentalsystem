import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets';
import Title from '../../Components/owner/Title';

const ManageCars = () => {


  const [car , setCar] = useState([]);

  const fetchOwnerCar = async () => {
    // Set car state with dummy data from assets
    setCar(dummyCarData);
  }

  useEffect(()=>{
    fetchOwnerCar
  },[])


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
        </table>

      </div>

    </div>
  )
}

export default ManageCars
