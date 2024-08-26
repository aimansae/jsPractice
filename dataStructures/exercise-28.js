//28. In each loop print the index of each character in a string

let greeting = "Hello, nice to meet you!";

const printIndex = (str) => {
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(`Index ${i}: ${str[i]}`);
  }
  return index;
};

printIndex(greeting);
