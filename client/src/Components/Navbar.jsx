import React, { useState } from 'react'
import {assets, menuLinks} from '../assets/assets'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();

    // toggle for small mobile screen
    const [open , setOpen] = useState(false)
  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600
    border-b  border-border-color relative transition-all  ${location.pathname ===  "/" &&  "bg-light"}`}>

        {/* logo for image */}
        <Link to='/'>     
      <img src= {assets.logo} alt="Logo not found" className='h-8' />
        </Link>

      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full mx-sm:top-16 max-sm:border-t border-border-color 
      right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300
      z-50 ${location.pathname ===  "/" ? "" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
     {menuLinks.map((link, index) => (
  <Link key={index} to={link.path}>
    {link.name}
  </Link>
))}

      </div>

    </div>
  )
}

export default Navbar
