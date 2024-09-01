/*135. You manage a list of bank accounts where each account has an accountNumber, accountHolder, balance, and accountType.
Transfer money between two accounts.

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
const transferMoney = (senderAccount, receiverAccount, amount) => {
  const fromAccount = bankAccounts.find(
    (account) => account.accountNumber === senderAccount
  );

  const toAccount = bankAccounts.find(
    (account) => account.accountNumber === receiverAccount
  );

  if (!fromAccount) {
    console.log(`Sender account nr ${fromAccount} not found`);
    return;
  }

  if (!toAccount) {
    console.log(`Receiver account nr ${toAccount} not found`);
    return;
  }
  if (fromAccount.balance < amount) {
    console.log(`Insufficient funds. Transfer Failed`);
  }

  fromAccount.balance -= amount;
  toAccount.balance += amount;

  console.log(
    `Successfully transferred $${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}`
  );
};
// Transfer 200 from Alice's account to Bob's account
transferMoney(1, 2, 200);
console.log(bankAccounts);
