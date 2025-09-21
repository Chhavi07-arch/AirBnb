import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { authDataContext } from './AuthContext';
import { userDataContext } from './UserContext';
import { listingDataContext } from './ListingContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const bookingDataContext = createContext();

function BookingContext({ children }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [total, setTotal] = useState(0);
  const [night, setNight] = useState(0);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const { getListing } = useContext(listingDataContext);
  const [bookingData, setBookingData] = useState([]);
  const [booking, setbooking] = useState(false);
  const navigate = useNavigate();

  const handleBooking = async (id) => {
    setbooking(true);
    try {
      const result = await axios.post(
        `${serverUrl}/api/booking/create/${id}`,
        {
          checkIn,
          checkOut,
          totalRent: total,
        },
        { withCredentials: true }
      );

      await getCurrentUser();
      await getListing();
      setBookingData(result.data);
      console.log(result.data);
      setbooking(false);
      navigate("/booked");
      toast.success("Booking Successful");
    } catch (error) {
      console.error("Error during booking:", error.response?.data?.message || error.message);
      setBookingData(null);
      setbooking(false); // Ensure loading state is cleared
      toast.error(error.response?.data?.message || "Failed to book. Please try again.");
    }
  };

  const cancelBooking = async (id) => {
    try {
      const result = await axios.delete(
        `${serverUrl}/api/booking/cancel/${id}`,
        { withCredentials: true }
      );

      await getCurrentUser();
      await getListing();
      console.log(result.data);
      toast.success("Booking Cancelled Successfully");
    } catch (error) {
      console.error("Error during cancellation:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Failed to cancel booking. Please try again.");
    }
  };

  const value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    bookingData,
    setBookingData,
    handleBooking,
    cancelBooking,
    booking,
    setbooking,
  };

  return (
    <div>
      <bookingDataContext.Provider value={value}>
        {children}
      </bookingDataContext.Provider>
    </div>
  );
}

export default BookingContext;