/*106.Create a function to manage expenses for different categories.
Get Total Expense: Calculate the total expense for a specific category.
 */
const expenses = {
  food: [10, 20, 30],
  transportation: [5, 15],
  entertainment: [25, 30],
};

const getTotal = (category) => {
  if (expenses[category]) {
    return expenses[category].reduce((total, amount) => total + amount, 0);
  } else {
    return 0;
  }
};
console.log(getTotal("transportation"));
