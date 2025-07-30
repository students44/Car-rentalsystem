import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import '../../index.css';


const Sidebar = () => {
  const user = dummyUserData;

  const location = useLocation();

  const [image, setImage] = useState("");

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };

  return (
    <div
      className="dash-sidebar relative min-h-screen md:flex flex-col items-center pt-8
    max-w-13 md:max-w-60 w-full  border-border-color text-sm"
    >

        {/* user image */}
      <div className="group relative">
        <label htmlFor="image">
 <img
  src={
    image
      ? URL.createObjectURL(image)
      : user?.image ||
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0"
  }
  alt="User profile"
  className="h-10 w-10 md:h-14 md:w-14 rounded-full mx-auto"
/>


          <input type="file" id="image" accept="image/*" hidden onChange={ e=> setImage(e.target.files
            [0]
          )}/>

          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full
          group-hover:flex items-center justify-center cursor-pointer">
           <img src={assets.edit_icon} alt="edit icon" />
          </div>
        </label>

      </div>

      {/* Add vertical gap below user image */}
      <div style={{ height: '1.5rem' }} />

    {image && (
        <button className="absolute top-0 left-0 right-0 flex p-2 gap-1
        bg-primary/10 text-primary cursor-pointer">Save <img src={assets.check_icon} width={13} alt="check icon" onClick={updateImage} /></button>
    )}
    
    {/* no space between the question mark and full stop */}
    <p className="mt-2 text-base max-md:hidden">{user?.name}</p>
    
     <div className="w-full">
        {
            ownerMenuLinks.map((link , index)=>(
                <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:md:-mt-8 
                ${link.path === location.pathname ? 'bg-primary text-white' : 'text-gray-600'}`}>
                    <img src={link.path === ! location.pathname ? link.coloredIcon :
                        link.icon
                    } alt="Car icon" />
                    <span className="max-md:hidden">{link.name}</span>
                    <div className={`${link.path === location.pathname && 'bg-primary'} w-1.5
                    h-8 rounded-l right-0 absolute`}></div>
                </NavLink>
            ))
        }
     </div>
    </div>
  );
};

export default Sidebar;
