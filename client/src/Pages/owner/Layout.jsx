import React from 'react'
import Sidebar from '../../Components/owner/Sidebar'
import NavbarOwner from '../../Components/owner/NavbarOwner'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
     <NavbarOwner />
     <div className='flex'>
      <Sidebar />
      <Outlet />
     </div>
    
    </div>
  )
}

export default Layout
