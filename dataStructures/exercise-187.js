/*187. Imagine a flight booking system that manages flights by their departure city, 
destination city, and available seats.
 You want to find flights from a particular city.*/
const flights = [
  { id: 1, from: "New York", to: "London", availableSeats: 5 },
  { id: 2, from: "Los Angeles", to: "Tokyo", availableSeats: 2 },
  { id: 3, from: "New York", to: "Paris", availableSeats: 0 },
];

const findFlight = (city) => {
  const flightFound = flights.filter((flight) => flight.from === city);
  if (flightFound.length === 0) {
    console.log(`No flights found from ${city}.`);
  } else {
    console.log(`Found flights from ${city}:`, flightFound);
  }
};
findFlight("New York");
