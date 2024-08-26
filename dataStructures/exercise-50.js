/*50. You have an array of invoice objects, each with a dueDate and amount.
Identify invoices that are overdue (i.e., the due date is before today).
*/

let invoices = [
  { invoiceId: 1, dueDate: "2024-08-20", amount: 500 },
  { invoiceId: 2, dueDate: "2024-08-15", amount: 300 },
  { invoiceId: 3, dueDate: "2024-08-25", amount: 700 },
  { invoiceId: 4, dueDate: "2024-07-30", amount: 200 },
];
let todayDate = new Date();
let overDueInvoices = invoices.filter((invoice) => {
  let dueDate = new Date(invoice.dueDate);
  return dueDate < today;
});

console.log(overDueInvoices);
