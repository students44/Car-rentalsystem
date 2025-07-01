import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { useLocation } from 'react-router-dom';

const App = () => {



  // state for login form
  const [showLoginForm , setShowLoginForm] = useState(false);

  // the navbar will be hide on owner dashboard
  const isOwnerPath = useLocation().pathname.startsWith('/owner') 
  console.log("isOwnerPath:", isOwnerPath);
  return (
    <>
    {/* This renders the Navbar and passes the login form state setter */}
  { !isOwnerPath && <Navbar  setShowLOgin={setShowLoginForm}/> }
  
    </>
  )
}

export default App

