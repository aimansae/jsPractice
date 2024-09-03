/*189. Imagine a flight booking system that manages flights by their departure city, 
destination city, and available seats.
and display all available flights sorted by destination.*/

const flights = [
  { id: 1, from: "New York", to: "London", availableSeats: 5 },
  { id: 2, from: "Los Angeles", to: "Tokyo", availableSeats: 2 },
  { id: 3, from: "New York", to: "Paris", availableSeats: 0 },
];

const flightByDestination = () => {
  const filtered = flights.filter((flight) => flight.availableSeats > 0);
  return filtered.sort((a, b) => a.to - b.to);
};
console.log(flightByDestination());
