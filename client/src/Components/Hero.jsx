import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import "./Hero.css";
import Swal from "sweetalert2";

const Hero = () => {
  // state to control the hero form
  const [pickUpLocation, setPickuPLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");



  // hero form validation
  const handleSearchClick = () => {
    if (!pickUpLocation || !pickUpDate || !returnDate) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all fields before searching.",
      });
      return;
    }

    // Example: success alert
    Swal.fire({
      icon: "success",
      title: "Searching...",
      text: `Searching for cars in ${pickUpLocation} from ${pickUpDate} to ${returnDate}.`,
    });



    // ✅ Clear form fields
  setPickuPLocation('');
  setPickUpDate('');
  setReturnDate('');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-gray-100 text-center">



    {/* background  */}
     
      


      <h1 className="text-4xl md:text-5xl font-semibold hero-title">
        Luxury Car on Rent <span className="hero-underline"></span>
      </h1>

      <form
        action=""
        className="flex flex-col h-26 md:flex-row items-start md:items-center justify-between
      p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0,1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          {/* pick-up your location */}
          <div className="flex flex-col items-start gap-2 ">
            <select
              name=""
              id=""
              required
              className="py-2 pickup-select"
              value={pickUpLocation}
              onChange={(e) => setPickuPLocation(e.target.value)}
            >
              <option value="">Pick up location</option>
              {cityList.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500 ">
              {" "}
              {pickUpLocation ? pickUpLocation : "Please select Location"}{" "}
            </p>
          </div>

          {/* pick-up your date */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pick-update ">Pick-up Date</label>
            <input
              type="date"
              name="date"
              id="pick-update"
              value={pickUpDate}
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              onChange={(e) => setPickUpDate(e.target.value)}
              required
            />
            {/* <p className='px-1 text-sm text-gray-500 '> {choseDate ? choseDate : 'Please select Location'}  </p> */}
          </div>

          {/* return date */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date ">Return Date</label>
            <input
              type="date"
              name="date"
              id="return-date"
              value={returnDate}
              className="text-sm text-gray-500"
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
        </div>
         {/* search button */}
          <button
            type="button"
            className="flex items-center justify-center gap-1 px-8 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull
        text-white rounded-full cursor-pointer"
            onClick={handleSearchClick}
          >
            <img
              src={assets.search_icon}
              alt="Search icon"
              className="brightness-300 transition-transform duration-600 ease-in-out hover:rotate-300"
            />
            Search
          </button>
      </form>
      {/* hero image */}
      <img src={assets.main_car} alt="hero main car" className="max-h-74 transition-transform duration-600 ease-in-out hover:rotate-15" />
    </div>
  );
};

export default Hero;
