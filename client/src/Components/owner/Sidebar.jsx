import React, { useState } from "react";
import { assets, dummyUserData } from "../../assets/assets";
import { useLocation } from "react-router-dom";

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
      className="relative min-h-screen md:flex flex-col items-center pt-8
    max-w-13 md:max-w-60 w-full border-r border-border-color text-sm"
    >

        {/* user image */}
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={img ? URL.createObjectURL(image): user?.image ||
                  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
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

    {image && (
        <button className="absolute top-0 left-0 right-0 flex p-2 gap-1
        bg-primary/10 text-primary cursor-pointer">Save <img src={assets.check_icon} width={13} alt="check icon" onClick={updateImage} /></button>
    )}
    
    {/* no space between the question mark and full stop */}
    <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

    </div>
  );
};

export default Sidebar;
