/*75. You have an inventory system for a warehouse, where each item has an id, name, category, and quantity. 
Based on organized items, update data
*/

let appointments = [
  {
    date: "2023-08-30",
    time: "10:00",
    patientName: "Alice",
    reason: "Checkup",
  },
  {
    date: "2023-08-30",
    time: "11:00",
    patientName: "Bob",
    reason: "Consultation",
  },
  {
    date: "2023-08-31",
    time: "09:00",
    patientName: "Charlie",
    reason: "Follow-up",
  },
  {
    date: "2023-09-02",
    time: "09:00",
    patientName: "Charlie",
    reason: "Follow-up",
  },
];
// Update an appointment
const updateAppointment = (date, time, updatedInfo) => {
  // Map through appointments to update based on date and time
  const updatedAppointments = appointments.map((appointment) => {
    if (appointment.date === date && appointment.time === time) {
      return { ...appointment, ...updatedInfo };
    }
    return appointment;
  });
  return updatedAppointments; // Return the updated array
};

// Call the function and store the result
let changed = updateAppointment("2023-08-30", "10:00", {
  reason: "Changed",
  time: "12",
});
console.log(changed);
