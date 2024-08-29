/*83. You have a table reservation system for a restaurant, where each reservation includes a date, time, customerName, and tableNumber. You need to:
Find reservations for a specific table on a given date.
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

const findTableByDate = (date, table) => {
  const reservationsByDate = reservations.filter(
    (reservation) => reservation.date === date
  );
  const reservationsForTable = reservationsByDate.filter(
    (reservation) => reservation.tableNumber === table
  );
  return reservationsForTable;
};
console.log(findTableByDate("2024-08-30", 1));
