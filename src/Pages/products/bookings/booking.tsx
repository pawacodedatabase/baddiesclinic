import { useEffect, useState } from "react";
import { fetchUnavailableDates, fetchBookings, updateBookings } from "../bookings/book";
import CheckBooking from "./check";
import logo from '../../../assets/logo.png'

const services = {
  hairstyling: 40,
  revamping: 60,
  dreadlocks: 80
};

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
const [bookingType, setBookingType] = useState<keyof typeof services>("hairstyling");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [unavailableDates, setUnavailableDates] = useState<string[]>([]);

  const today = new Date().toISOString().split("T")[0];


  useEffect(() => {
    const load = async () => {
      const dates = await fetchUnavailableDates();
      setUnavailableDates(dates);
    };
    load();
  }, []);

//   const validatePhone = (value: string) => /^\d{10,15}$/.test(value);

  const handleBook = async () => {
    if (!name || !phone || !date || !bookingType) return alert("Please fill all fields");

    // if (!validatePhone(phone)) return alert("Enter a valid phone number");

    if (unavailableDates.includes(date)) {
      return alert("Selected date is not available");
    }

    setLoading(true);

    const newBooking = {
      id: Math.floor(100000 + Math.random() * 900000).toString(), // 6-digit ID
      name,
      phone,
      date,
      type: bookingType,
      price: services[bookingType]
    };

    const bookings = await fetchBookings();
    await updateBookings([...bookings, newBooking]);

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(`Hii ${newBooking.name} , Your booking is successful!
Your Booking ID is ${newBooking.id}. Please keep it safe. \n
`);
      setName(""); setPhone(""); setDate(""); setBookingType("hairstyling");
    }, 5000);
  };

  return (
    <div className="p-4 max-w-md w-full mx-auto font-sans  text-gray-800">
      {loading && (
        <div className="fixed inset-0 bg-[#000] flex flex-col items-center justify-center z-50">
          <img src={logo} alt="Logo" className=" w-[150px] mb-4" />
          <div className="w-48 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-[#FFD700] animate-pulse w-full transition-all duration-[5s]" />
          </div>
          <p className="mt-2 text-[#FFD700] font-medium">Processing your booking...</p>
        </div>
      )}

      <h2 className="text-xl font-bold mb-4 ">Book Appointment </h2>

      {successMessage && (
        <div className="bg-green-50 text-green-800 p-4 mb-4 rounded shadow">{successMessage}</div>
      )}

      <input
        className="border p-2 w-full mb-2"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
<input
  className="border p-2 w-full mb-2"
  placeholder="Phone Number (e.g. +447123456789)"
  value={phone}
  onChange={e => setPhone(e.target.value)}
  inputMode="tel"
  type="tel"
/>



    <input
  className="border p-2 w-full mb-2"
  type="date"
  min={today}
  value={date}
  onChange={e => setDate(e.target.value)}
/>

   <select
  className="border p-2 w-full mb-2"
  value={bookingType}
  onChange={e => setBookingType(e.target.value as "hairstyling" | "revamping" | "dreadlocks")}
>
  <option value="hairstyling">Hairstyling – £40</option>
  <option value="revamping">Revamping – £60</option>
  <option value="dreadlocks">Dreadlocks – £80</option>
</select>


      <button
        className="bg-black  text-white px-4 py-2 w-full rounded hover:bg-gray-700 mb-9 transition"
        onClick={handleBook}
      >
        Book Appointment
      </button>

      <CheckBooking  />

      <div className="mt-6 text-sm text-gray-600 border-t pt-4">
        {/* <h3 className="font-bold text-lg mb-2 text-purple-800">Policies – Baddies Clinic</h3> */}

        <h4 className="font-semibold">Deposit</h4>
        <p className="mb-2">
          All appointments require a non-refundable deposit of 30% of the service fee. This ensures
          your slot is reserved. No deposit, no booking confirmation.
        </p>

        <h4 className="font-semibold">Refunds</h4>
        <p className="mb-2">
          Deposits are non-refundable under any circumstance. Full refunds are only offered if
          Baddies Clinic cancels or reschedules the appointment due to unforeseen circumstances.
        </p>

        <h4 className="font-semibold">Appointments</h4>
        <p>
          Please arrive at least 10 minutes early. Late arrivals over 15 minutes may result in
          cancellation without refund. Reschedules must be requested 48 hours in advance. No-shows
          will lose their deposits and may be blacklisted from future bookings.
        </p>
      </div>
    </div>
  );
};

export default BookingForm;
