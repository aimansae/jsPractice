/*1. Write a function that takes an array of numbers and
returns a new array with the numbers in reverse order.
*/
const reverseArray = (arr) => {
  const newArray = arr.reverse();
  return newArray;
};
const myArray = [1, , 5, 2, 2, 3, 4, 5];
console.log(reverseArray(myArray));

/*2. Write a function that takes an array of strings and
returns an object where the keys are the strings and
the values are the number of times each string appears in the array.*/

const calculateOccurrences = (arr) => {
  let occurrences = {};
  arr.forEach((item) => {
    occurrences[item] = (occurrences[item] || 0) + 1;
  });
  return occurrences;
};
const arrayOfStrings = ["a", "b", "c", "d", "d"];
console.log(calculateOccurrences(arrayOfStrings));

/*3. Given an array of numbers, find the maximum and minimum values,
then create a new array that contains only the unique
numbers in ascending order.*/

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

/*6. Calculate the total worth of each product an array of
objects displaying it alongside the product name
*/
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

//7. Convert a string of numbers, into an array

const stringOfNumbers = ["1", "2", "3", "4"];
const stringToArray = stringOfNumbers.map((item) => Number(item));
console.log(stringToArray);

//8. Filter an array with only the even numbers

const numbers2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//9. Check if the person in an array of objects is > 18 years old

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

//10. Remove all the duplicates from an Array

const duplicatedArray = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
const newArray = duplicatedArray.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log(newArray);

/*11.  Create an object representing a book with properties like title, author, and year. Write
a function to print a formatted string containing this information.*/
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

/*12. Task: Create a Map where the keys are student names and the values are their grades.
Write a function that returns the average grade of all students.*/

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

/*13. Create a Set of colors. Add a new color to the set,
then check if a particular color exists in the set and remove a color.*/

const colors = new Set(["red", "blue", "green"]);
colors.add("yellow");
console.log(colors);
console.log(colors.has("red"));
colors.delete("blue");
console.log(colors);

/*14. Given a nested object representing a company’s employees,
write a function to get the name of an employee given their ID.*/

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

/*15. Write a function to flatten a nested array into a
 single-level array.*/
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

/*18. You have an array of customer orders with their amounts and dates.
You need to filter out orders above a certain amount and sort them by date.
*/

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

/*19. You have an array of blog posts,
each with an array of tags. Extract all unique tags from all posts.
*/

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

/*20. You have an array of sales records, each with a product name and amount.
Calculate the total sales amount for each product.
*/

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

/*21. You have an array of user objects, each with a first name and last name.
Transform this data to create full names.
*/

let users = [
  { firstName: "john", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Jim", lastName: "Brown" },
];

const fullName = users.map((user) => {
  return `${user.firstName} ${user.lastName}`;
});
console.log(fullName);

/*22. You have an array of orders with customer IDs.
Group these orders by customer
*/

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

/*23.You have an array of students with their scores.
Find the top 3 students with the highest scores.
*/

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

/*24.You have two arrays of event dates
Merge them into a single array and sort the dates.
*/

let workEvents = ["2024-08-15", "2024-08-20", "2024-08-25"];
let personalEvents = ["2024-08-16", "2024-08-22", "2024-08-18"];

const mergedArray = workEvents.concat(personalEvents);
console.log(mergedArray);

const sortedDates = mergedArray.sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);
console.log(sortedDates);

/*25. You have an array of product reviews, each with a rating.
Calculate the average rating.
*/

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

/*26. Create an array from r strings and 'Jupiter ' at the end and 'Sun' at the start.
Remove the last 2strings, and then the first two
*/

let planets = ["Mercury", "Venus", "Earth", "Mars"];

// Add Jupiter at the end

planets.push("Jupiter");
console.log(planets);

// Add Sun at the start
planets.unshift("Sun");
console.log(planets);

// Remove the 2 last strings
planets.splice(-2, 2);
console.log("Remove 2 last items", planets);
// Remove the first 2 strings
planets.splice(0, 2);
console.log("Remove first 2 items", planets);

//27. Multiply array numbers by 5

let multiple = 5;
const arr3 = [10, 11, 12, 13, 14, 15];

for (let n of arr3) {
  const result = n * multiple;
  console.log(`${n}*${multiple} = ${result}`);
}

//28. print in each loop what is on the Index of your string

let greeting = "Hello, nice to meet you!";
let index = 0;
for (let i = 0; i <= greeting.length; i++) {
  index++;
  console.log(index, greeting[i]);
}
//29. calculate average from an array of gradeswithout reduce

let grade = [55, 63, 82, 98, 91, 43];
let total = 0;
let totalGrades = grade.forEach((g) => {
  total += g;
});

let gradeAverage = total / grade.length;
console.log("Total is:", total, "Average is:", average);

/*30.  You have an array of user objects.
You need to filter out the users who are inactive.
Print the names of the Active users
*/

const userStatus = [
  { name: "Jack", isActive: true },
  { name: "Mara", isActive: false },
  { name: "Luke", isActive: true },
  { name: "Mike", isActive: false },
];

const activeUsers = userStatus
  .filter((item) => item.isActive)
  .map((u) => u.name);
console.log(activeUsers);

/*31. You have an array of products, each with a price and quantity property.
Calculate the total value of the inventory.
*/
const myProducts = [
  { name: "A", price: 500, quantity: 12 },
  { name: "B", price: 100, quantity: 12 },
  { name: "C", price: 330, quantity: 99 },
  { name: "D", price: 900, quantity: 750 },
  { name: "E", price: 70, quantity: 650 },
];
// let totalInventory = 0;
// myProducts.forEach((product) => {
//   totalInventory += product.price * product.quantity;
// });
// console.log("Total is $:", totalInventory);

// With for loop
let inventoryT = 0;
for (let i = 0; i < myProducts.length; i++) {
  let singleProduct = myProducts[i];
  inventoryT += singleProduct.price * singleProduct.quantity;
}
console.log(inventoryT);

/*32. You have an array of strings representing different items sold in a store.
Find the item that appears most frequently in the array.
*/

let items = [
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "apple",
  "kiwi",
  "orange",
  "banana",
  "apple",
];

const countItems = {};
items.forEach((i) => {
  console.log(i);
  countItems[i] = (countItems[i] || 0) + 1;
});
console.log(countItems);

let mostFrequentItem = null;
let highestCount = 0;
for (let item in countItems) {
  if (countItems[item] > highestCount) {
    highestCount = countItems[item];
    mostFrequentItem = item;
  }
}
console.log(highestCount);

/*33. You have two arrays of employee objects.
One array contains the id and name,
and the other array contains the id and department.
Merge these arrays based on the id to create a new array with id, name, and department.
*/

const employees = [
  {
    id: 1,
    name: "Luke",
  },
  {
    id: 2,
    name: "Jack",
  },
  {
    id: 3,
    name: "Mark",
  },
];
const department = [
  {
    id: 1,
    department: "Finance",
  },
  {
    id: 2,
    department: "Ops",
  },
  {
    id: 3,
    department: "It",
  },
];

const mergedData = employees.map((employee) => {
  let depId = department.find((dep) => dep.id === employee.id);
  return {
    name: employee.name,
    id: employee.id,
    department: depId ? depId.department : null,
  };
});

console.log(mergedData);

/*34. : You have an array of objects representing employees,
each with a firstName and lastName.
Create a new array containing the email addresses in the format firstname.lastname@company.com.
*/

const empData = [
  {
    firstName: "Sara",
    lastName: "Smith",
  },
  {
    firstName: "Jack",
    lastName: "Jones",
  },

  {
    firstName: "Jane",
    lastName: "White",
  },
];

let domain = "@company.com";
const emailFromFullName = empData.map((emp) => {
  let email = `${emp.firstName.toLowerCase()}${emp.lastName.toLowerCase()}${domain}`;
  return email;
});

console.log(emailFromFullName);

/*35. Scenario: You have an array of products, each with a name and price.
Remove all products below a certain threshold.
*/

let limit = 50;
const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];
let filteredCart = cart
  .filter((product) => {
    return product.price >= limit;
  })
  .map((p) => {
    return {
      item: p.name,
    };
  });
console.log(filteredCart);

/*36. You have an array of employees, each with a name and hireDate.
Sort the employees by their hire date in ascending order.
*/

const employeeList = [
  { name: "Jane", hireDate: "22-11-1999" },
  { name: "Sara", hireDate: "02-05-2022" },
  { name: "Jack", hireDate: "12-12-2000" },
  { name: "jules", hireDate: "02-05-2003" },
];
const sortedByDate = employeeList.sort(
  (a, b) => new Date(a.hireDate) - new Date(b.hireDate)
);

console.log(sortedByDate);

//37. You have an array of integers.Find the biggest number and display it.
let num = [100, 4, 200, 1, 3, 2];

let sortedNum = num.sort((a, b) => b - a);
console.log(sortedNum[0]);

/*38. You have an array of articles, each with a title and views property.
Find the top N most viewed articles.
*/

const articles = [
  { title: "A", views: 300 },
  { title: "B", views: 400 },
  { title: "C", views: 320 },
  { title: "D", views: 50 },
  { title: "E", views: 700 },
];
const sortedArticles = articles.sort((a, b) => b.views - a.views);
console.log(sortedArticles);
const topArticles = sortedArticles.slice(0, 2);
console.log(topArticles);

/*39.  You have an array of orders, each with a status property (e.g., "pending", "shipped", "delivered").
Filter out orders that are "shipped".
*/

const foodOrders = [
  {
    item: "Pizza",
    status: "delivered",
  },
  {
    item: "Pasta",
    status: "delivered",
  },
  {
    item: "Sushi",
    status: "shipped",
  },
  {
    item: "Kebab",
    status: "delivered",
  },
  {
    item: "Chicken",
    status: "shipped",
  },
  {
    item: "Dish",
    status: "Pending",
  },
];
const findShipped = foodOrders.filter((order) => order.status === "shipped");
console.log(findShipped);

/*40.You have an array of sales transactions, each with a sellerId and amount property.
Calculate the total earnings for each seller.
*/

let salesBySeller = [
  { sellerId: "seller1", amount: 200 },
  { sellerId: "seller2", amount: 150 },
  { sellerId: "seller1", amount: 300 },
  { sellerId: "seller3", amount: 400 },
  { sellerId: "seller2", amount: 100 },
  { sellerId: "seller1", amount: 150 },
];

let earning = {};
salesBySeller.forEach((transaction) => {
  let sellerId = transaction.sellerId;
  let amount = transaction.amount;
  if (earning[sellerId]) {
    earning[sellerId] += amount;
  } else {
    earning[sellerId] = amount;
  }
});

console.log(earning);

/* 41.You have an array of purchase records, each with a userId and purchaseId.
Identify users who have made more than one purchase.
*/

let purchases = [
  { userId: "user1", purchaseId: "p1" },
  { userId: "user2", purchaseId: "p2" },
  { userId: "user1", purchaseId: "p3" },
  { userId: "user3", purchaseId: "p4" },
  { userId: "user2", purchaseId: "p5" },
  { userId: "user1", purchaseId: "p6" },
];

let purchaseCount = {};
purchases.forEach((purchase) => {
  let userId = purchase.userId;
  if (purchaseCount[userId]) {
    purchaseCount[userId]++;
  } else purchaseCount[userId] = 1;
});

console.log("Purchases", purchaseCount);
let usersWithMultiplePurchases = Object.keys(purchaseCount).filter(
  (userId) => purchaseCount[userId] > 1
);
console.log(usersWithMultiplePurchases);

//42. You have two arrays of product IDs. Find the product IDs that appear in both arrays.

let array1 = [101, 102, 103, 104, 105];
let array2 = [103, 104, 106, 107];

let commonIds = array1.filter((id) => array2.includes(id));
console.log(commonIds);

//43 .Flatten a nested array and remove duplicates

let nestedArr = [
  [1, 2, 3],
  [4, 5, 2],
  [6, [7, 8]],
  [1, 9, [10, 10]],
];
let flat = nestedArr.flat(Infinity);
console.log(flat);
let removeDuplicates = flat.filter((n, index) => flat.indexOf(n) === index);
console.log("remove duplicates wit Set", removeDuplicates);

// or with Set
let flatWithSet = [...new Set(flat)];
console.log("remove duplicates wit Set", flatWithSet);

//44. Create an array, based on user who have the full information.
let users1 = [
  { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { name: "Bob", email: "", phone: "987-654-3210" },
  { name: "Charlie", email: "charlie@example.com", phone: "" },
  { name: "David", email: "david@example.com", phone: "555-555-5555" },
  { name: "Eve", email: null, phone: "222-333-4444" },
  { name: "Frank", email: "frank@example.com", phone: null },
];

let filteredUsers1 = users1.filter((u) => u.phone !== "" && u.email !== "");
console.log(filteredUsers1);

/*45. You have an array of user activities, each with userId, activityType, and timestamp.
Create a summary that counts the number of each activity type per user.
*/

let userActivities = [
  { id: "Alice", activityType: "cooking", time: "14:00" },
  { id: "Bob", activityType: "running", time: "12:00" },
  { id: "Charlie", activityType: "eating", time: "11:00" },
  { id: "David", activityType: "reading", time: "10:00" },
  { id: "Bob", activityType: "eating", time: "11:00" },
  { id: "Alice", activityType: "reading", time: "10:00" },
];
let totalActivities = {};
let summary = userActivities.forEach((user) => {
  let userName = user.id;

  if (totalActivities[userName]) {
    totalActivities[userName]++;
  } else {
    totalActivities[userName] = 1;
  }
});

console.log(totalActivities);

/*46.  You have an array of orders, each with a deliveryDate.
Filter out orders that were delivered within the last 7 days.
*/

let orders5 = [
  { id: 1, deliveryDate: "2024-08-15" },
  { id: 2, deliveryDate: "2024-08-10" },
  { id: 3, deliveryDate: "2024-08-16" },
  { id: 4, deliveryDate: "2024-08-12" },
];

let today = new Date();
console.log(today);
let sevenDaysAgo = new Date();
sevenDaysAgo.setDate(today.getDate() - 7);

let recentOrders = orders5.filter((order) => {
  let deliveryDate = new Date(order.deliveryDate);
  return deliveryDate >= sevenDaysAgo && deliveryDate <= today;
});
console.log(recentOrders);

/*47.  You have an array of sales records, each with a date and amount.
Generate a report that summarizes total sales for each month.
*/

let salesRecords = [
  { date: "2024-01-15", amount: 200 },
  { date: "2024-01-22", amount: 150 },
  { date: "2024-02-05", amount: 300 },
  { date: "2024-02-25", amount: 100 },
  { date: "2024-03-10", amount: 400 },
  { date: "2024-03-15", amount: 200 },
];

let salesByMonth = {};
salesRecords.forEach((record) => {
  let date = new Date(record.date);
  console.log(date);
  let year = date.getFullYear();
  console.log(year);
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let key = `${year}-${month}`;

  if (!salesByMonth[key]) {
    salesByMonth[key] = 0;
  }
  salesByMonth[key] += record.amount;
});

console.log(salesByMonth);

/*48. You have an array of songs objects, each with title, author.
Extract a list of all songs by a specific artist.
*/

let songs = [
  { song: "A", artist: "Mark" },
  { song: "B", artist: "Mark" },
  { song: "C", artist: "Phil" },
  { song: "D", artist: "Mark" },
  { song: "E", artist: "Mark" },
  { song: "E", artist: "Stephan" },
];

const songsByMark = songs.filter((song) => song.artist === "Mark");
console.log(songsByMark);

/*49. You have an array of employee objects,
each with a name and yearsOfExperience.
Categorize employees into "Junior", "Mid-Level", and "Senior" based on their years of experience.
*/

let employees4 = [
  { name: "Alice", yearsOfExperience: 2 },
  { name: "Bob", yearsOfExperience: 5 },
  { name: "Charlie", yearsOfExperience: 8 },
  { name: "David", yearsOfExperience: 12 },
  { name: "Eve", yearsOfExperience: 1 },
];

const threshold = {
  junior: 3,
  midLevel: 7,
};

const categories = {
  junior: [],
  mid: [],
  senior: [],
};

employees4.forEach((employee) => {
  if (employee.yearsOfExperience < threshold.junior) {
    categories.junior.push(employee);
  } else if (employee.yearsOfExperience <= threshold.midLevel) {
    categories.mid.push(employee);
  } else categories.senior.push(employee);
});
console.log(categories);

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

/*51. You have an array of product objects, each with a name, price, and inStock property.
Create a list of products that are currently in stock.
*/

let products2 = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Smartphone", price: 800, inStock: false },
  { name: "Tablet", price: 600, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
];

let inStockProducts = products2.filter((p) => p.inStock);
console.log(inStockProducts);
