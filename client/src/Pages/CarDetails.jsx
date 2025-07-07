import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Car, setCar] = useState(null);
  const Currency = import.meta.env.VITE_CURRENCY;


const [pickupDate, setPickupDate] = useState("");
const [returnDate, setReturnDate] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (!pickupDate || !returnDate) {
    Swal.fire({
      icon: "warning",
      title: "Missing Information",
      text: "Please fill out all fields before submitting.",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Booking Confirmed!",
    text: `You've booked a car from ${pickupDate} to ${returnDate}.`,
  });

  setPickupDate("");
  setReturnDate("");
};



  useEffect(
    () => {
      setCar(dummyCarData.find((Car) => Car._id === id));
    },
    // when the id change the url will be automatically change
    [id]
  );

  // if there is a car to return this otherwise run the else statement
  return Car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="flex items-center mb-5 gap-3 text-md text-gray-500 cursor-pointer px-8"
      >
        <img
          src={assets.arrow_icon}
          alt="back to all cars button img"
          className="rotate-180 opacity-50"
        />
        Back to all Cars
      </button>

      {/* form details and data show */}
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* left car image & details */}
        <div className="col-span-2">
          <img
            src={Car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-lg"
          />

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">
              {Car.brand} {Car.modal}
            </h1>
            <p className="text-gray-500 text-lg">
              {Car.category} • {Car.year}
            </p>
          </div>

          <hr className="border-border-color my-6" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: assets.users_icon,
                text: `${Car.seating_capacity} Seats`,
              },
              { icon: assets.fuel_icon, text: Car.fuel_type },
              { icon: assets.location_icon, text: Car.location },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex flex-col items-center bg-light p-4 rounded-lg"
              >
                <img src={icon} alt="" className="h-5 mb-2" />

                {text}
              </div>
            ))}
          </div>

          {/* description */}

          <div>
            <h1 className="text-xl font-medium mb-3 mt-3">Description</h1>
            <p className="text-gray-500">{Car.description}</p>
          </div>

          {/* features */}
          <div>
            <h1 className="text-xl font-medium mb-3 mt-3">Features</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "360 camera",
                "Bluetooth",
                "Gps",
                "Heated Seats",
                "Rare View Mirror",
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-500">
                  <img src={assets.check_icon} className="h-4 mr-2" alt="" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right booking form */}
        <form onSubmit={handleSubmit} className="bg-white text-gray-500 w-full h-100 max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/20">
          <div className=" py-2 flex justify-between items-center">
            <p className="font-bold">{Currency}{Car.pricePerDay}</p>
            <p>per day</p>
          </div>
          <hr className="border-border-color my-6" />

          {/* pickup date */}
          <div className="mt-3 flex flex-col gap-2">
            <label htmlFor="pickup-date" id="pickup-date" className="font-bold">
              Pickup Date
            </label>
            <input
              id="pickup-date"
               onChange={(e) => setPickupDate(e.target.value)} 
                value={pickupDate}
              className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
              type="date"
              // min attribute set the current data user will not chose the previous date
              min={new Date().toISOString().split('T')[0]} 

              required
            />
          </div>

          {/* return date */}
          <div className="mt-3">
            <label htmlFor="return-date" className="font-bold">
              return Date
            </label>
            <input
              id="return-date"
              onChange={(e) => setReturnDate(e.target.value)}  
              value={returnDate}
              className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
              type="date"
               min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mb-3 cursor-pointer mt-3 bg-primary hover:bg-primary-dull transition-all active:scale-95 py-2.5 rounded text-white font-medium"
          >
            Book Now
          </button>

          <p className="text-center mt-4">No Credit card required to reserve</p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
