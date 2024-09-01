/*133. You manage an event booking system where each booking has an eventId, customerName, seatsBooked, and date. You need to:
Cancel a booking.*/

const bookings = [
  { eventId: 1, customerName: "Alice", seatsBooked: 2, date: "2024-09-01" },
  { eventId: 2, customerName: "Bob", seatsBooked: 1, date: "2024-09-02" },
  { eventId: 1, customerName: "Charlie", seatsBooked: 3, date: "2024-09-01" },
];

const cancelBooking = (id, customerName) => {
  const filtered = bookings.filter(
    (booking) =>
      !(booking.eventId === id && booking.customerName === customerName)
  );
  if (filtered.length === bookings.length) {
    console.log(`Booking for ${customerName} not found`);
  } else {
    bookings.length = 0;
    bookings.push(...filtered);
    console.log(`Booking for ${customerName} deleted successfully`);
  }
};
cancelBooking("Bob");
console.log(bookings);
