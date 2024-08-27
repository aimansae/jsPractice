/*69. 9. Financial Transactions
You have an array of financial transactions:
Calculate the total expenditure for the month.
Identify transactions above a certain amount.
Filter out transactions that occurred on a specific date.*/

const transactions = [
  { amount: 200, date: "2024-08-01", description: "Groceries" },
  { amount: 1500, date: "2024-08-01", description: "Rent" },
  { amount: 50, date: "2024-08-02", description: "Coffee" },
  { amount: 75, date: "2024-08-02", description: "Dinner" },
  { amount: 20, date: "2024-08-03", description: "Bus Ticket" },
];
const manageTransactions = (transactions) => {
  // total transactions
  const total = transactions.reduce(
    (acc, currentV) => acc + currentV.amount,
    0
  );
  console.log(`Total amount is${total}`);
  // transactions above 200
  const threshold = 2;
  const transactionThreshold = transactions.filter(
    (item) => item.amount > threshold
  );
  console.log(`Transactions above 200Eur are: ${transactionThreshold}`);

  const specificDate = "2024-08-02";
  const transactionSpecificDate = transactions.filter(
    (transaction) => transaction.date === specificDate
  );
  console.log("Transactions on 2024-08-02:", transactionSpecificDate);
};
manageTransactions(transactions);
