import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {  Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import CardDetails from './Pages/CarDetails'
import Cars from './Pages/Cars';
import MyBookings from './Pages/MyBookings';
import Carcard from './Components/Carcard';
import Footer from './Components/Footer';

// dashboard contents files import
import Layout from './Pages/owner/Layout';
import Dashboard from './Pages/owner/Dashboard';
import AddCar from './Pages/owner/AddCar';
import ManageCars from './Pages/owner/ManageCars';
import ManageBookings from './Pages/owner/ManageBookings';




const App = () => {



  // state for login form
  const [showLoginForm , setShowLoginForm] = useState(false);

  // the navbar will be hide on owner dashboard
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
    {/* This renders the Navbar and passes the login form state setter */}
  { !isOwnerPath && <Navbar  setShowLOgin={setShowLoginForm}/> }



  <Routes>
  <Route  path='/' element = {<Home />}/>
   <Route path='/CarDetails/:id' element = {< CardDetails/>} />
   <Route path='/Cars' element = {<Cars/>} />
   <Route path='/my-bookings' element={<MyBookings />} />

   {/* Routes for dashboards */}
   <Route path='/owner' element={<Layout/>} />
   <Route index element={<Dashboard />} />
   <Route path='add-car' element={<AddCar />} />
   <Route path='manage-car' element={<ManageCars />} />
   <Route path='manage-Booking' element={<ManageBookings />} />
  

  </Routes>
  
    {/* footer will be show in all pages except dashboard  */}

    {!isOwnerPath &&  <Footer />}
     
    </>
  )
}

export default App

