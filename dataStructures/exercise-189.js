/*189. Imagine a flight booking system that manages flights by their departure city, 
destination city, and available seats.
You want to book a seat on a flight*/
const flights = [
  { id: 1, from: "New York", to: "London", availableSeats: 5 },
  { id: 2, from: "Los Angeles", to: "Tokyo", availableSeats: 2 },
  { id: 3, from: "New York", to: "Paris", availableSeats: 0 },
];

const bookFlight = (id) => {
  const filteredFlightById = flights.find((flight) => flight.id === id);
  if (filteredFlightById && filteredFlightById.availableSeats > 0) {
    console.log(`Seat for flight with id ${id} booked`);
    filteredFlightById.availableSeats--;
  } else {
    console.log(`No seats available for flight with id ${id}`);
  }
};
bookFlight(1);
console.log(flights);
