/*24.You have two arrays of event dates
Merge them into a single array and sort the dates.
*/

let workEvents = ["2024-08-15", "2024-08-20", "2024-08-25"];
let personalEvents = ["2024-08-16", "2024-08-22", "2024-08-18"];

const mergeArrays = (arr1, arr2) => {
  const mergedArray = arr1.concat(arr2);

  const sortedDates = mergedArray.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return sortedDates;
};

console.log(mergeArrays(workEvents, personalEvents));
