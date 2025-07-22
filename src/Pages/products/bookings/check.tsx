import { useState } from "react";
import { fetchBookings, updateBookings } from "./book";

const CheckBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [bookingDetails, setBookingDetails] = useState<any | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "notfound">("idle");

  const handleTrack = async () => {
    setStatus("loading");
    const bookings = await fetchBookings();
    const found = bookings.find((b: any) => b.id === bookingId);
    if (found) {
      setBookingDetails(found);
      setStatus("idle");
    } else {
      setBookingDetails(null);
      setStatus("notfound");
    }
  };

  const handleCancel = async () => {
    const bookings = await fetchBookings();
    const newBookings = bookings.filter((b: any) => b.id !== bookingId);
    await updateBookings(newBookings);
    setBookingDetails(null);
    alert("Booking cancelled (if found)");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Track or Cancel Your Booking</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Enter Booking ID"
        value={bookingId}
        onChange={e => setBookingId(e.target.value)}
      />

      <div className="flex gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleTrack}>
          Track Booking
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleCancel}>
          Cancel Booking
        </button>
      </div>

      {status === "loading" && <p className="mt-4 text-gray-500">Checking booking...</p>}
      {status === "notfound" && <p className="mt-4 text-red-600">Booking not found.</p>}

      {bookingDetails && (
        <div className="mt-4 border rounded p-4 bg-gray-50">
          <h3 className="font-semibold text-md mb-2 text-purple-600">Booking Details</h3>
          <p><strong>Name:</strong> {bookingDetails.name}</p>
          {/* <p><strong>Phone:</strong> {bookingDetails.phone}</p> */}
          <p><strong>Date:</strong> {bookingDetails.date}</p>
          <p><strong>Service:</strong> {bookingDetails.type}</p>
          {/* <p><strong>Price:</strong> €{bookingDetails.price}</p> */}
        </div>
      )}
    </div>
  );
};

export default CheckBooking;
