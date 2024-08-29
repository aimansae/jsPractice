/*83. You have a table reservation system for a restaurant, where each reservation includes a date, time, customerName, and tableNumber. You need to:
Track reservations by date and time using a data structure.
*/

let reservations = [
  {
    date: "2024-08-30",
    time: "19:00",
    customerName: "Alice",
    tableNumber: 1,
  },
  {
    date: "2024-08-30",
    time: "19:00",
    customerName: "Bob",
    tableNumber: 2,
  },
  {
    date: "2024-08-30",
    time: "20:00",
    customerName: "Charlie",
    tableNumber: 1,
  },
];

// track reservation by date
// [date:{time{[table, customerName]}}]
const organizeReservations = (reservations) => {
  let object = {};

  reservations.forEach((reservation) => {
    const { date, time, tableNumber, customerName } = reservation;
    if (!object[date]) {
      object[date] = {};
    }
    if (!object[date][time]) {
      object[date][time] = [];
    }
    object[date][time].push({ tableNumber, customerName });
  });
  return object;
};

const organizedReservations = organizeReservations(reservations);
console.log(organizedReservations);
