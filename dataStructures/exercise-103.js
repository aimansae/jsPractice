/*103. You have a list of attendees for an event:
Find the names of attendees who have RSVPed.*/
const attendees = [
  { name: "Alice", RSVP: true },
  { name: "Bob", RSVP: false },
  { name: "Charlie", RSVP: true },
  { name: "David", RSVP: false },
  { name: "Eve", RSVP: true },
];

const rsvpAttendees = (attendees) => {
  return attendees
    .filter((attendee) => attendee.RSVP)
    .map((attendee) => attendee.name);
};
const attendeesRsvp = rsvpAttendees(attendees);
console.log(attendeesRsvp);
