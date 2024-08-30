/*105.Create a function to manage expenses for different categories.
Implement features to add expenses, */
const expenses = {
  food: [10, 20, 30],
  transportation: [5, 15],
  entertainment: [25, 30],
};

const addExpense = (category, amount) => {
  if (expenses[category]) {
    expenses[category].push(amount);
  } else {
    expenses[category] = amount;
  }
};
addExpense("food", 300);
console.log("Added", expenses);
