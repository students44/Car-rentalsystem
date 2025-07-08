import React, { useEffect, useState } from 'react';
import { dummyMyBookingsData } from '../assets/assets';
import Title from '../Components/Title'; 

const MyBookings = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    console.log("MyBookings is mounting...");
    setBooking(dummyMyBookingsData);
  }, []);

  return (
    <div className='px-6 mt-16 lg:px-24 xl:px-32 2xl:px-48 text-sm max-w-7xl'>
      <Title
        title="My Bookings"
        subtitle="View and manage all your car bookings"
        align="left"
      />


      <div>
        {
          MyBookings.map((booking , index)=>(
            <div key={booking._id} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6
             border border-border-color rounded-lg mt-5 first-mt-12'>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MyBookings;
