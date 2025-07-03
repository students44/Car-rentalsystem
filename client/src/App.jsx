import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {  Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import CardDetails from './Pages/CarDetails'
import Cars from './Pages/Cars';
import MyBookings from './Pages/MyBookings';
import Carcard from './Components/Carcard';



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
   <Route path='/MyBookings' element = {< MyBookings/>} />
  </Routes>
  
    </>
  )
}

export default App

