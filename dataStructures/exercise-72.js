/*72. You have an inventory system for a warehouse, with data
You need to:
Convert the date in dd-mm-yyyy format
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
// convert data in simple data structure
// {date:[{time:'',patience:'', reason:''}]}
const organizeByDate = (appointments) => {
  const object = {};
  appointments.forEach((appointment) => {
    if (!object[appointment.date]) {
      object[appointment.date] = [];
    }
    object[appointment.date].push(appointment);
  });
  return object;
};
// fixDateFormat(appointments);
// console.log(appointments);

// Covert date with split

const convertedDate = (appointments) => {
  appointments.forEach((appointment) => {
    const [year, month, day] = appointment.date.split("-");
    appointment.date = `${day}-${month}-${year}`;
  });
};
convertedDate(appointments);
console.log(appointments);
