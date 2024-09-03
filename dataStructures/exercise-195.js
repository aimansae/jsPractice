/*195.Imagine a customer service ticketing system where each ticket has a unique ID, a customer name, 
a description, and a status. 
You want to count the number of tickets by status. */
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

const countTicketByStatus = (tickets) => {
  const object = {};

  tickets.forEach((ticket) => {
    const status = ticket.status;
    if (!object[status]) {
      object[status] = 1;
    } else {
      object[status]++;
    }
  });
  return object;
};
console.log(countTicketByStatus(tickets));
