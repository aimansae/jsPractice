/*104. You have a list of attendees for an event:
Check if a specific person is attending.
*/

const attendees = [
  { name: "Alice", RSVP: true },
  { name: "Bob", RSVP: false },
  { name: "Charlie", RSVP: true },
  { name: "David", RSVP: false },
  { name: "Eve", RSVP: true },
];

const searchAttendee = (personName) => {
  const filtered = attendees.filter((attendee) => attendee.name === personName);
  if (filtered.length > 0) {
    const person = filtered[0];
    return `${person.name} is attending`;
  } else {
    return `Attendee '${personName}' not found`;
  }
};
console.log(searchAttendee("like"));
