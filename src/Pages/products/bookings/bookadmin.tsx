import{ useEffect, useState } from "react";
import { fetchBookings, fetchUnavailableDates, updateBookings, updateUnavailableDates } from "./book";

const BookAdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [unavailable, setUnavailable] = useState<string[]>([]);
  const [newDate, setNewDate] = useState("");

  const load = async () => {
    const bks = await fetchBookings();
    const un = await fetchUnavailableDates();
    setBookings(bks);
    setUnavailable(un);
  };


const deleteUnavailableDate = async (date: string) => {
  const updated = unavailable.filter(d => d !== date);
  await updateUnavailableDates(updated);
  load();
};



  useEffect(() => {
    load();
  }, []);

  const addUnavailableDate = async () => {
    if (!newDate) return;
    const updated = [...unavailable, newDate];
    await updateUnavailableDates(updated);
    setNewDate("");
    load();
  };

  const deleteBooking = async (id: string) => {
    const updated = bookings.filter((b: any) => b.id !== id);
    await updateBookings(updated);
    load();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Booking Control Panel</h2>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Set Unavailable Date(s)</h3>
        <input className="border p-2 mr-2" type="date" value={newDate} onChange={e => setNewDate(e.target.value)} />
        <button className="bg-black text-white px-4 py-1 rounded" onClick={addUnavailableDate}>Add</button>
       <h3 className="font-bold mb-2 mt-8">Unavailable Dates</h3>
       
        <ul className="mt-2">
  {unavailable.map(d => (
    <li key={d} className="flex items-center justify-between  border-black border-b-2 py-1">
      <span>{d}</span>
      <button
        className="text-sm text-red-600 hover:underline"
        onClick={() => deleteUnavailableDate(d)}
      >
        Delete
      </button>
    </li>
  ))}
</ul>

      </div>

      <div>
        <h3 className="font-semibold mb-2"> Available Bookings</h3>
        <ul>
          {bookings.map((b: any) => (
            <li key={b.id} className="mb-2 border p-2">
              <div><strong>ID:</strong> {b.id}</div>
              <div><strong>Name:</strong> {b.name}</div>
              <div><strong>Booking Type:</strong> {b.type}</div>
              <div><strong>Phone:</strong> {b.phone}</div>
              <div><strong>Date:</strong> {b.date}</div>
              <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded" onClick={() => deleteBooking(b.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookAdminPanel;
