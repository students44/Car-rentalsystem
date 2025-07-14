import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import CardDetails from './Pages/CarDetails';
import Cars from './Pages/Cars';
import MyBookings from './Pages/MyBookings';

// Dashboard Pages
import Layout from './Pages/owner/Layout';
import Dashboard from './Pages/owner/Dashboard';
import AddCar from './Pages/owner/AddCar';
import ManageCars from './Pages/owner/ManageCars';
import ManageBookings from './Pages/owner/ManageBookings';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLoginForm} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CarDetails/:id' element={<CardDetails />} />
        <Route path='/Cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />

        {/* Nested routes under /owner with Layout */}
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-car' element={<AddCar />} />
          <Route path='manage-car' element={<ManageCars />} />
          <Route path='manage-Booking' element={<ManageBookings />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
