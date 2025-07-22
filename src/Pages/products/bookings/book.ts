const API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB.";
const BIN_ID = "687f9df27b4b8670d8a574ab"; // The single JSON Bin containing both bookings and unavailableDates

const headers = {
  "Content-Type": "application/json",
  "X-Master-Key": API_KEY,
};

const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Fetch the entire object
export const fetchAllData = async () => {
  const res = await fetch(`${BIN_URL}/latest`, { headers });
  const data = await res.json();
  return data.record || { bookings: [], unavailableDates: [] };
};

// Get only bookings
export const fetchBookings = async () => {
  const data = await fetchAllData();
  return data.bookings || [];
};

// Get only unavailable dates
export const fetchUnavailableDates = async () => {
  const data = await fetchAllData();
  return data.unavailableDates || [];
};

// Update only bookings
export const updateBookings = async (bookings: any[]) => {
  const data = await fetchAllData();
  const updated = {
    ...data,
    bookings,
  };
  await fetch(BIN_URL, {
    method: "PUT",
    headers,
    body: JSON.stringify(updated),
  });
};

// Update only unavailable dates
export const updateUnavailableDates = async (unavailableDates: string[]) => {
  const data = await fetchAllData();
  const updated = {
    ...data,
    unavailableDates,
  };
  await fetch(BIN_URL, {
    method: "PUT",
    headers,
    body: JSON.stringify(updated),
  });
};
