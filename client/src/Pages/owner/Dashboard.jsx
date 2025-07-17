import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../Components/owner/Title';

const Dashboard = () => {


  const Currency = import.meta.env.VITE_CURRENCY

  const [data , setData] = useState(
    {
      totalCars: 0,
      totalBookings:0,
      pendingBookings:0,
      completedBookings:0,
      recentBooking: [ 
        {
      car: { brand: "Toyota", model: "Corolla" },
      createdAt: "2025-07-15T14:30:00Z",
      price: 3500,
      status: "Confirmed"
    },
    {
      car: { brand: "Suzuki", model: "Alto" },
      createdAt: "2025-07-14T12:10:00Z",
      price: 2800,
      status: "Pending"
    }
      ],
      monthlyRevenue: 0 
    })

const dashboardCard = [
  { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
  { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
  { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
  { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored }
];



console.log("Recent Booking Data:", data);







    // when the components mount , it load dummy data into the data state.
 useEffect(() => {
  console.log("Loading dummy data...");

  // Simulate loading dummy data (remove fetchData)
  const response = dummyDashboardData;

  console.log("Loaded response:", response);

  setData({
    ...response,
    recentBookings: response.recentBookings || []
  });
}, []);

  return (
    <div className='pt-10 flex-1 md:px-10'>
      
      <Title  title= "Admin dashBoard"  subtitle= "Monitor Your all platform performance including total cars booking, revenue and recent activities"/>
     


     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 mx-w-3xl'>
     {
      dashboardCard.map((card, index)=>(
        <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-border-color'>
         <div>
          <h1 className='text-xs text-gray-500 b'>{card.title}</h1>
          <p className='text-lg font-semibold'>{card.value}</p>
         </div>

         <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'>
        <img src={card.icon} alt="card icon" className='w-4 h-4' />
         </div>


        </div>
      ))}
     </div>

     <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
      {/* recent booking */}
      <div className='p-4 md:p-6 border-border-color rounded-md max-w-lg w-full'>
        <h1 className='text-lg font-medium'>Recent Bookings</h1>
        <p className='text-gray-500'>Latest Customer Booking</p>

        { 
        data.recentBookings?.map((booking, index)=>(
          <div key={index} className='mt-4 flex items-center justify-between'>

            <div className='flex items-center gap-3'>
              <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                <img src={assets.listIconColored} alt="" className='h-5 w-5' />
              </div>
                <div>
              <p>{booking.car.brand} {booking.car.model}</p>
              <p className='text-sm text-gray-500'>{booking.createdAt.split('T')[0]} {booking.car.model}</p>
            </div>
            </div>

          <div className='flex items-center gap-2 font-medium'>
            <p className='text-sm text-gray-500'>{Currency} {booking.price}</p>
            <p className='px-3 py-0.5 border border-border-color rounded-full'>{booking.status}</p>
          </div>
          
          </div>
        ))
        }

      </div>


      {/* monthly revenue */}
      <div></div>
     </div>



    </div>
  )
}

export default Dashboard
