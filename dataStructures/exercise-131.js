/*131. You manage an event booking system where each booking has an eventId, customerName, seatsBooked, and date. You need to:
Check availability of seats for a specific event.*/

const bookings = [
  { eventId: 1, customerName: "Alice", seatsBooked: 2, date: "2024-09-01" },
  { eventId: 2, customerName: "Bob", seatsBooked: 1, date: "2024-09-02" },
  { eventId: 1, customerName: "Charlie", seatsBooked: 3, date: "2024-09-01" },
];
const seatsInTotal = 10;
// Check seat availability for an event
const checkSeatAvailability = (eventId) => {
  const foundBooking = bookings.find((booking) => booking.eventId === eventId);
  if (foundBooking) {
    let availableSeats = seatsInTotal - foundBooking.seatsBooked;
    console.log(`Event with id ${eventId} has ${availableSeats} left`);
  } else {
    console.log(`Event with id ${eventId} not found`);
  }
};
checkSeatAvailability(2);
