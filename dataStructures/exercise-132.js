/*132. You manage an event booking system where each booking has an eventId, customerName, seatsBooked, and date. You need to:
Book seats for a customer.*/

const bookings = [
  { eventId: 1, customerName: "Alice", seatsBooked: 2, date: "2024-09-01" },
  { eventId: 2, customerName: "Bob", seatsBooked: 1, date: "2024-09-02" },
  { eventId: 1, customerName: "Charlie", seatsBooked: 3, date: "2024-09-01" },
];

// check if seats are available based on eventID

const maxSeats = 10;
const checkAvailability = (eventId) => {
  const available = bookings
    .filter((booking) => booking.eventId === eventId)
    .reduce((total, booking) => total + booking.seatsBooked, 0);
  const checkAvailability = maxSeats - available;
  return checkAvailability;
};

const bookSeats = (eventId, customerName, seatRequested) => {
  const availableSeats = checkAvailability(eventId);

  if (seatRequested <= availableSeats) {
    bookings.push({
      eventId,
      customerName,
      seatRequested,
      date: new Date().toISOString().split("T")[0],
    });

    console.log(
      `Booking successful: ${seatRequested} requested for ${customerName}`
    );
  } else {
    console.log(
      `Booking failed: Only ${availableSeats} seats available for event ${eventId}.`
    );
  }
};
bookSeats(1, "David", 10);
