//1. Write a function that takes an array of numbers and
//returns a new array with the numbers in reverse order.

const reverseArray = (arr) => {
  const newArray = arr.reverse();
  return newArray;
};
const myArray = [1, , 5, 2, 2, 3, 4, 5];
console.log(reverseArray(myArray));

//2. Write a function that takes an array of strings and
//returns an object where the keys are the strings and
//the values are the number of times each string appears in the array.
const calculateOccurrences = (arr) => {
  let occurrences = {};
  arr.forEach((item) => {
    occurrences[item] = (occurrences[item] || 0) + 1;
  });
  return occurrences;
};
const arrayOfStrings = ["a", "b", "c", "d", "d"];
console.log(calculateOccurrences(arrayOfStrings));

//3. Given an array of numbers, find the maximum and minimum values,
//then create a new array that contains only the unique
//numbers in ascending order.

const numbers = [5, 8, 1, 2, 3, 4, 5];
const maxValue = Math.max(...numbers);
console.log(maxValue);

const minValue = Math.min(...numbers);
console.log(minValue);
const sortedArray = numbers.sort((a, b) => a - b);
console.log(sortedArray);
//4. Sort an Array of objects by ascending price

const products = [
  {
    name: "lamp",
    price: 30,
  },
  {
    name: "fridge",
    price: 500,
  },
  {
    name: "Tv",
    price: 500,
  },
  {
    name: "washing machine",
    price: 900,
  },
];
products.sort((a, b) => a.price - b.price);
console.log(products);

//5. Check how many times a letter appears in an array

const letters = ["a", "b", "a", "b", "c"];
let count = {};

letters.forEach((item) => {
  count[item] = (count[item] | 0) + 1;
  return count;
});
console.log(letters);

//6. Multiply all the numbers from an array

const arrayOfNumbers = [1, 2, 3, 4];
const multipedArray = arrayOfNumbers.reduce((acc, value) => acc * value);
console.log(multipedArray);

// 7. Calculate the total worth of each product an array of
//objects displaying it alongside the product name

const store = [
  { name: " laptop", count: 25, price: 1000 },
  { name: "hairDryer", count: 10, price: 50 },
  { name: "washingMachine", count: 2, price: 1500 },
];

const totalProductsValue = store.map((product) => {
  return {
    name: product.name,
    totalValue: product.count * product.price,
  };
});
console.log(totalProductsValue);

totalProductsValue.forEach((item) =>
  console.log(`${item.name}: ${item.totalValue}`)
);

//8. Convert a string of numbers, into an array

const stringOfNumbers = ["1", "2", "3", "4"];
const stringToArray = stringOfNumbers.map((item) => Number(item));
console.log(stringToArray);

// 9. Filter an array with only the even numbers

const numbers2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//10. Check if the person in an array of objects is > 18 years old

const person2 = [
  {
    name: "Sara",
    age: 12,
  },
  {
    name: "Luke",
    age: 18,
  },
  {
    name: "Mary",
    age: 21,
  },
  {
    name: "John",
    age: 33,
  },
];
const isAnAdult = person2.filter((person) => person.age >= 18);
console.log("Adults are:", isAnAdult);

// 10. Remove all the duplicates from an Array

const duplicatedArray = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
const newArray = duplicatedArray.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log(newArray);

//11.  Create an object representing a book with properties like title, author, and year. Write
//a function to print a formatted string containing this information.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};
const printBookInfo = (book) => {
  console.log(
    `${book.title} by ${book.author}, published in by ${book.author}`
  );
};
printBookInfo(book);

// 12. Task: Create a Map where the keys are student names and the values are their grades.
//Write a function that returns the average grade of all students.

const grades = new Map([
  ["Jack", 85],
  ["Lara", 30],
  ["John", 15],
  ["Jules", 75],
]);

function calculateAverage(grades) {
  let total = 0;
  let count = 0;

  grades.forEach((grade) => {
    total += grade;
    count++;
  });

  return total / count;
}
console.log(calculateAverage(grades));

//13. Create a Set of colors. Add a new color to the set,
//then check if a particular color exists in the set and remove a color.

const colors = new Set(["red", "blue", "green"]);
colors.add("yellow");
console.log(colors);
console.log(colors.has("red"));
colors.delete("blue");
console.log(colors);

// 15. Given a nested object representing a company’s employees,
//write a function to get the name of an employee given their ID.

const company = {
  employees: {
    1: { name: "John Doe", position: "Developer" },
    2: { name: "Jane Smith", position: "Manager" },
    3: { name: "Emily Johnson", position: "Designer" },
  },
};

const getEmployeeName = (company, id) => {
  return company.employees[id]
    ? company.employees[id].name
    : "Employee not found";
};
console.log(getEmployeeName(company, 2));

// 15. Write a function to flatten a nested array into a single-level array.
let nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

let flattenedArray = nestedArray.flat(1);
console.log(flattenedArray);

//16. Merge two arrays—one with keys and one with values—into an object.
let keys = ["name", "age", "location"];
let values = ["Alice", 30, "New York"];

function mergeArraysToObject(keys, values) {
  let obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
console.log(mergeArraysToObject(keys, values));

//17. Use filter to remove duplicates in an array
let array = [1, 2, 2, 3, 4, 4, 5];

const filtered = array.filter((item, index) => {
  return array.indexOf(item) === index;
});

console.log(filtered);

// 18. You have an array of customer orders with their amounts and dates.
//You need to filter out orders above a certain amount and sort them by date.

let orders = [
  { id: 1, amount: 250, date: "2024-08-15" },
  { id: 2, amount: 50, date: "2024-08-16" },
  { id: 3, amount: 300, date: "2024-08-14" },
  { id: 4, amount: 100, date: "2024-08-17" },
];

let minAmount = 100;
let filteredOrders = orders.filter(
  (currentAmount) => currentAmount.amount > minAmount
);
filteredOrders.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log(filteredOrders);

// 19. You have an array of blog posts,
//each with an array of tags. Extract all unique tags from all posts.

let blog = [
  { id: 1, tags: ["JavaScript", "Web Development"] },
  { id: 2, tags: ["JavaScript", "React"] },
  { id: 3, tags: ["Web Development", "CSS"] },
];

let tagsInOneArray = blog.flatMap((post) => post.tags);
console.log(tagsInOneArray);
let filterArray = tagsInOneArray.filter(
  (item, index) => tagsInOneArray.indexOf(item) === index
);
console.log(filterArray);

//20. You have an array of sales records, each with a product name and amount.
//Calculate the total sales amount for each product.
let sales = [
  { product: "Laptop", amount: 1000 },
  { product: "Mouse", amount: 50 },
  { product: "Keyboard", amount: 75 },
  { product: "Laptop", amount: 1200 },
  { product: "Mouse", amount: 30 },
];

const totalSales = {};

sales.forEach((sale) => {
  if (totalSales[sale.product]) {
    totalSales[sale.product] += sale.amount;
  } else {
    totalSales[sale.product] = sale.amount;
  }
});
console.log(totalSales);
//21. You have an array of user objects, each with a first name and last name.
//Transform this data to create full names.
let users = [
  { firstName: "john", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Jim", lastName: "Brown" },
];

const fullName = users.map((user) => {
  return `${user.firstName} ${user.lastName}`;
});
console.log(fullName);

//22. You have an array of orders with customer IDs.
//Group these orders by customer
let customerOrders = [
  { id: 1, customerId: "A", amount: 250 },
  { id: 2, customerId: "B", amount: 50 },
  { id: 3, customerId: "A", amount: 300 },
  { id: 4, customerId: "C", amount: 100 },
  { id: 5, customerId: "B", amount: 150 },
];

let orderByCustomer = {};
customerOrders.forEach((order) => {
  if (orderByCustomer[order.customerId]) {
    orderByCustomer[order.customerId].push(order);
  } else {
    orderByCustomer[order.customerId] = [order];
  }
});
console.log(orderByCustomer);
//23.You have an array of students with their scores.
//Find the top 3 students with the highest scores.
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Dave", score: 95 },
  { name: "Eve", score: 88 },
];
const sortedScore = students.sort((a, b) => b.score - a.score);
console.log(sortedScore);
const topThreeStudents = sortedScore.slice(0, 3);
console.log("Top students:", topThreeStudents);

//24.You have two arrays of event dates
//Merge them into a single array and sort the dates.
let workEvents = ["2024-08-15", "2024-08-20", "2024-08-25"];
let personalEvents = ["2024-08-16", "2024-08-22", "2024-08-18"];

const mergedArray = workEvents.concat(personalEvents);
console.log(mergedArray);

const sortedDates = mergedArray.sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);
console.log(sortedDates);

//25. You have an array of product reviews, each with a rating.
//Calculate the average rating.
let reviews = [
  { productId: "A", rating: 4 },
  { productId: "B", rating: 5 },
  { productId: "A", rating: 3 },
  { productId: "B", rating: 4 },
  { productId: "C", rating: 2 },
];

let sum = reviews
  .map((review) => review.rating)
  .reduce((sum, rating) => sum + rating);
let average = sum / reviews.length;

console.log(average);
