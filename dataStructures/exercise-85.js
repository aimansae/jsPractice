/*83. You have a table reservation system for a restaurant, where each reservation includes a date, time, customerName, and tableNumber. You need to:
Update or cancel reservations based on date, time, and tableNumber.*/
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

// update a reservation
const updateReservation = (time, date, tableNr, newDetails) => {
  reservations = reservations.map((reservation) => {
    if (
      reservation.date === date &&
      reservation.time === time &&
      reservation.tableNumber === tableNr
    ) {
      return { ...reservation, newDetails }; // update
    }
    return reservation;
  });

  return reservations; // Return the updated list
};
console.log(
  updateReservation("2024-08-30", "19:00", 1, { customerName: "Alice Updated" })
);

//delete reservation by customerName
const deleteReservation = (customerName) => {
  const toDelete = reservations.filter(
    (reservation) => reservation.customerName === customerName
  );
  reservations = reservations.filter(
    (reservation) => reservation.customerName !== customerName
  );
  return {
    message: `Deleted ${toDelete.map((r) => r.customerName)}`,
    updatedReservation: reservations,
  };
};
console.log(deleteReservation("Bob"));
