import React, { useEffect, useState } from "react";
import { assets, dummyMyBookingsData } from "../assets/assets";
import Title from "../Components/Title";

const MyBookings = () => {
  const [booking, setBooking] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY

  useEffect(() => {
    console.log("MyBookings is mounting...");
    setBooking(dummyMyBookingsData);
  }, []);

  return (
    <div className="px-6 pt-16 lg:px-24 xl:px-32 2xl:px-48 text-sm max-w-8xl" style={{ backgroundColor: '#F3F4F6' }}>
      <Title
        title="My Bookings"
        subtitle="View and manage all your car bookings"
        align="left"
      />

      <div>
        {booking.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6
             border border-border-color rounded-lg mt-5 first-mt-12"
          >
            {/* car image + car info */}
            <div className="md:col-spin-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt="booking car image"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>

              <p className="text-lg font-medium mt-3">
                {booking.car.brand} {booking.car.modal}
              </p>

              <p className="text-gray-500">
                {booking.car.year} • {booking.car.category} •
                {booking.car.location}
              </p>
            </div>

            {/* booking info */}

            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-light rounded">
                  Booking #{index + 1}
                </p>
                <p
                  className={`px-3 py-1 text-sm rounded-full ${
                    booking.status === "confirmed"
                      ? "bg-green-400/15  text-green-600"
                      : "bg-red-400/15 text-red-600"
                  }`}
                >
                  {booking.status}
                </p>
              </div>

              <div className="flex items-start gap-2 mt-3">
              <img src={assets.calendar_icon_colored} alt="calendar icon"  className="w-4 h-4 mt-1"/>

              <div>
                <p className="text-gray-500">Rental period </p>
                <p>{booking.pickupDate.split('T') [0]} To  {booking.returnDate.split('T') [0]}  </p>
              </div>
              </div>

              {/* duplicate div */}
              <div className="flex items-start gap-2 mt-3">
              <img src={assets.location_icon_colored} alt="location icon"  className="w-4 h-4 mt-1"/>

              <div>
                <p className="text-gray-500">Pick-up location </p>
                <p>{booking.car.location}  </p>
              </div>
              </div>
            </div>

          {/* price */}
          <div className="md:col-spin-1 flex flex-col justify-between gap-5">
            <div className="text-sm text-gray-500 text-right">
              <p> Total Price</p>
              <h1 className="text-2xl font-semibold text-primary">{currency}{booking.price}</h1>
              <p>Booked on {booking.createdAt.split('T')[0]}</p>
            </div>
          </div>

          
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
