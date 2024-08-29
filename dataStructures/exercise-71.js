/*71. You have a list of events, each with a date, time, and description. You need to:
Organize events by date using a data structure.
Find all events scheduled for a specific date.
Update or delete events based on date and time.*/

const events = [
  { date: "2024-08-01", time: "10:00", description: "Meeting with Team A" },
  { date: "2024-08-01", time: "14:00", description: "Lunch with Client" },
  { date: "2024-08-02", time: "09:00", description: "Project Deadline" },
  { date: "2024-08-02", time: "11:00", description: "Team Stand-up" },
];
// organize event by date
// key is the date, value is description and time
//{"2024-08-01":[{time:10, description:'Meeting'}]}

const eventByDate = (events) => {
  const object = {};
  events.forEach((event) => {
    if (!object[event.date]) {
      object[event.date] = [];
    }
    object[event.date].push(event);
  });
  return object;

  // find event for specific date, use the filtered object and get the
  // date value, if no value is find an empty array is returned
};
const findSpecificDateEvent = (object, date) => {
  return object[date] || [];
};

const updateEvent = (object, date, time, newDescription) => {
  // check if the date exists in the object
  if (object[date]) {
    // find the event matching the given time
    let event = object[date].find((e) => e.time === time);
    // if the event exists match the description
    if (event) {
      event.description = newDescription;
    }
  }
};

// delete an event
const deleteEvent = (object, date, time) => {
  if (object[date]) {
    object[date] = object[date].filter((e) => e.time !== time);
    if (object[date].length === 0) delete object[date]; // Clean up if empty
  }
};

// Group event by date
let organizedByDate = eventByDate(events);
console.log("By date:", organizedByDate);

// Search by specific date
let bySpecificDate = findSpecificDateEvent(organizedByDate, "2024-08-02");
console.log(bySpecificDate);

// Update specific element
updateEvent(organizedByDate, "2024-08-02", "11:00", "Changed Location");
console.log("Updated", organizedByDate);

// Deleting an event
deleteEvent(organizedByDate, "2024-08-02", "11:00");
console.log("2024-08-02", "11:00 deleted", organizedByDate);
