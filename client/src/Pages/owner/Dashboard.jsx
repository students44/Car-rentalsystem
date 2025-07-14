import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../Components/owner/Title';

const Dashboard = () => {

  const [data , setData] = useState(
    {
      totalCars: 0,
      totalBookings:0,
      pendingBookings:0,
      completedBookings:0,
      recentBooking: [],
      monthlyRevenue: 0 
    })

const dashboardCard = [
  { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
  { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
  { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
  { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored }
];

    useEffect(()=>{
      setData(dummyDashboardData)
    }, [])
  return (
    <div className='pt-10 flex-1 md:px-10'>
      
      <Title  title= "Admin dashBoard"  subtitle= "Monitor Your all platform performance including total cars booking, revenue and recent activities"/>
     


     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 mx-w-3xl'>
     {
      dashboardCard.map((card, index)=>(
        <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-border-color'>
         <div>
          <h1 className='text-xs text-gray-500'>{card.title}</h1>
          <p className='text-lg font-semibold'>{card.value}</p>
         </div>

         <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'>
        <img src={card.icon} alt="card icon" className='w-4 h-4' />
         </div>


        </div>
      ))
     }
     </div>
    </div>
  )
}

export default Dashboard
