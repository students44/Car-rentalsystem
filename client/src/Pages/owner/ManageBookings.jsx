import React, { useEffect, useState } from 'react';
import { dummyMyBookingsData } from '../../assets/assets';
import Title from '../../Components/owner/Title';

const ManageBookings = () => {
  const Currency = import.meta.env.VITE_CURRENCY;

  const [bookings, setBookings] = useState([]);

  // Move this function OUTSIDE of useEffect
  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title
        title="Manage Bookings"
        subtitle="Track all customers bookings, Approve or cancel request, and manage statuses."
      />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-gray-300 mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600 shadow-lg rounded-md'>
          <thead className='text-white' style={{ backgroundColor: '#AD86F0' }}>
            <tr className='border-b border-borderColor'>
              <th className='p-3 font-medium border-r border-borderColor'>Car</th>
              <th className='p-3 font-medium max-md:hidden border-r border-borderColor'>Date Range</th>
              <th className='p-3 font-medium border-r border-borderColor'>Total</th>
              <th className='p-3 font-medium max-md:hidden border-r border-borderColor'>Payment</th>
              <th className='p-3 font-medium border-r border-borderColor'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className='border-b border-borderColor text-gray-500'>
                <td className='p-3 flex items-center gap-3 bg-gray-50'>
                  <img
                    src={booking.car.image}
                    alt=""
                    className='w-12 h-12 rounded-md object-cover aspect-square'
                  />
                  <p className='font-medium max-md:hidden'>
                    {booking.car.brand} {booking.car.modal}
                  </p>
                </td>

                <td className='p-3 max-md:hidden bg-gray-50'>
                  {booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}
                </td>

                <td className='p-3 bg-gray-50'>
                  {Currency}{booking.price}
                </td>

                <td className='p-3 max-md:hidden bg-gray-50'>
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>Offline</span>
                </td>

                <td className='p-3 bg-gray-50'>
                  {booking.status === 'pending' ? (
                    <select value={booking.status} className="border border-gray-300 px-2 py-1 text-xs rounded-md
                    outline-none focus:border-primary">
                      <option value="pending">Pending</option>
                      <option value="confirm">Confirm</option>
                      <option value="cancel">Cancel</option>
                    </select>
                  ) : (
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100">{booking.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
