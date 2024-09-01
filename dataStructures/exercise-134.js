/*134. You manage a list of bank accounts where each account has an accountNumber, accountHolder, balance, and accountType.
Deposit or withdraw money from an account.
*/

const bankAccounts = [
  {
    accountNumber: 1,
    accountHolder: "Alice",
    balance: 1000,
    accountType: "Savings",
  },
  {
    accountNumber: 2,
    accountHolder: "Bob",
    balance: 500,
    accountType: "Checking",
  },
  {
    accountNumber: 3,
    accountHolder: "Charlie",
    balance: 2000,
    accountType: "Savings",
  },
];

// Deposit or withdraw money
const updateBalance = (accountNumber, amount) => {
  let accountFound = false;
  bankAccounts.forEach((account) => {
    if (account.accountNumber === accountNumber) {
      account.balance += amount;
      console.log(
        `${amount > 0 ? `Deposited ${amount}` : `Withdrew ${-amount}`} for ${
          account.accountHolder
        }. Balance: $${account.balance}`
      );
      accountFound = true;
    }
  });
  if (!accountFound) {
    console.log(`Account number ${accountNumber} not found.`);
  }
};
updateBalance(1, 50);
updateBalance(2, -500);
console.log(bankAccounts);
