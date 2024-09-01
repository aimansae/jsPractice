/*136. You manage a list of bank accounts where each account has an accountNumber, accountHolder, balance, and accountType.
Find all accounts with a balance above a certain amount.
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
const threshold = 100;

const findAccount = (bankAccounts) => {
  const filtered = bankAccounts.filter(
    (account) => account.balance >= threshold
  );
  if (filtered.length > 0) {
    console.log(`Accounts with ore than $${threshold} `);
    filtered.map((account) => console.log(`${account.accountHolder}`));
  } else {
    console.log(`No account with more than $${threshold} found`);
  }
};
findAccount(bankAccounts);
