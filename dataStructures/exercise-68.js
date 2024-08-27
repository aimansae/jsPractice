/*You are planning a trip and have an itinerary:
List all destinations in alphabetical order.
Find the destination with the most days allocated.
Remove any duplicates from the list of destinations.*/

const itinerary = [
  { destination: "Paris", days: 5 },
  { destination: "New York", days: 3 },
  { destination: "Tokyo", days: 7 },
  { destination: "Paris", days: 5 },
  { destination: "London", days: 4 },
  { destination: "Tokyo", days: 7 },
];

const manageItinerary = (itinerary) => {
  const uniqueDestinations = [
    ...new Set(itinerary.map((i) => i.destination)),
  ].sort();
  console.log(uniqueDestinations);
  const mostDays = itinerary.reduce((maxN, current) => {
    return current.days > maxN.days ? current : maxN;
  });
  return {
    sortedDestinations: uniqueDestinations,
    mostDaysDestination: mostDays,
  };
};
console.log(manageItinerary(itinerary));
