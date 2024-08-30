/*107.Create a function to manage expenses for different categories.
 generate a summary report */
const expenses = {
  food: [10, 20, 30],
  transportation: [5, 15],
  entertainment: [25, 30],
};

const getTotalExpense = (category) => {
  if (expenses[category]) {
    return expenses[category].reduce((total, amount) => total + amount, 0);
  } else {
    return 0;
  }
};

// Function to generate a summary report
//{food: 60, transportation: 20, entertainment: 55}
const generateSummaryReport = () => {
  const report = {};
  for (let category in expenses) {
    report[category] = getTotalExpense(category);
  }
  return report;
};

console.log(generateSummaryReport());
