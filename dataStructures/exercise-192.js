/*192.Imagine a customer service ticketing system where each ticket has a unique ID, a customer name, 
a description, and a status. 
You want to filter open tickets,  */
const tickets = [
  {
    ticketId: 1,
    customer: "John",
    description: "Issue with login",
    status: "Open",
  },
  {
    ticketId: 2,
    customer: "Mary",
    description: "Billing problem",
    status: "Closed",
  },
  {
    ticketId: 3,
    customer: "Alex",
    description: "Technical support",
    status: "Open",
  },
];
const openTickets = (status) => {
  const filtered = tickets.filter((ticket) => ticket.status === status);
  if (filtered.length === 0) {
    console.log(`No ${status} tickets found`);
  } else {
    console.log("Found");
  }
  return filtered;
};
console.log(openTickets("Open"));
