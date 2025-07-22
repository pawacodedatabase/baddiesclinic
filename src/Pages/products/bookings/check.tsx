import  { useState } from "react";
import { fetchBookings, updateBookings } from "./book";

const CheckBooking = () => {
  const [bookingId, setBookingId] = useState("");

  const handleCancel = async () => {
    const bookings = await fetchBookings();
    const newBookings = bookings.filter((b: any) => b.id !== bookingId);
    await updateBookings(newBookings);
    alert("Booking cancelled (if found)");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Cancel Your Booking</h2>
      <input className="border p-2 w-full mb-2" placeholder="Booking ID" value={bookingId} onChange={e => setBookingId(e.target.value)} />
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleCancel}>Cancel Booking</button>
    </div>
  );
};

export default CheckBooking;
