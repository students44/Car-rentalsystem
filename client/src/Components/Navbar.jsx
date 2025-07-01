import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLOgin }) => {
  const location = useLocation();

  // toggle for small mobile screen
  const [open, setOpen] = useState(false);

  // navigation for dashboard and login button
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600
    border-b  border-border-color relative transition-all  ${location.pathname === "/" && "bg-gray-100"
        }`}
    >
      {/* logo for image */}
      <Link to="/">
        <img src={assets.logo} alt="Logo not found" className="h-8" />
      </Link>

      <div
        className={`fixed top-16 h-screen w-full right-0 flex flex-col sm:static sm:h-auto sm:w-auto
           sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-4 sm:p-0 transition-transform
            duration-300 z-50 ${location.pathname === "/" ? "" : "bg-white"} 
            ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
          }`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}

        {/* for search box */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-border-color px-3 rounded-full max-w-50">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder:gray-50 border-none rounded"
            placeholder="Search Products"
          />
          <img src={assets.search_icon} alt="Search " />
        </div>

        {/* login and dashboard button */}

        <div className="flex gap-3 max-sm:flex-col items-start  sm:items-center">
          {/* dashboard button */}
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>

          {/* login button */}
          <button
            type="button"
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all
  text-white rounded-lg "
            onClick={() => setShowLOgin(true)}
          >
            Login
          </button>


        </div>
      </div>


      {/* button for mobile menu screen */}
     <button className="sm:hidden cursor-pointer" aria-label="menu" onClick={() => setOpen(!open)}>
      <img
        src={open ? assets.close_icon : assets.menu_icon}
        alt="Menu icon for mobile screen"
      />
    </button>

    </div>
  );
};

export default Navbar;
