/*194.Imagine a customer service ticketing system where each ticket has a unique ID, a customer name, 
a description, and a status. 
You want to update a ticket's status  */
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

const updateTicket = (id, statusUpdate) => {
  const ticketToUpdate = tickets.find((ticket) => ticket.ticketId === id);
  if (ticketToUpdate) {
    ticketToUpdate.status = statusUpdate;
  } else {
    console.log(`Ticket with ${id} not found`);
  }
  return ticketToUpdate;
};
console.log(updateTicket(3, "CLOSED"));
