/*57.  You are organizing an event where participants need to check in. You have an array of all participants and a set of those who have checked in. 
Find out which participants have not checked in.
*/
const participants = [
  {
    id: 1,
    status: "checkedIn",
  },
  {
    id: 2,
    status: "checkedIn",
  },
  {
    id: 3,
    status: "not-checkedIn",
  },
  {
    id: 4,
    status: "not-checkedIn",
  },
  {
    id: 5,
    status: "checkedIn",
  },
];

const isNotCheckedIn = (participants) => {
  // Filter participants who have the status "not-checkedIn"
  return participants
    .filter((participant) => participant.status === "not-checkedIn")
    .map((participant) => participant.id);
};
console.log(`User with Id: ${isNotCheckedIn(participants)} are Not checked in`);
