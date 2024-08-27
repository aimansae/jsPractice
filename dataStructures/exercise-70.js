/*70. You have an array of daily temperature readings. You need to:
Find the highest and lowest temperature readings.
Calculate the average temperature.
Filter out days with temperatures above a certain threshold.*/
const temperatures = [
  { date: "2024-08-01", temperature: 78 },
  { date: "2024-08-02", temperature: 82 },
  { date: "2024-08-03", temperature: 85 },
  { date: "2024-08-04", temperature: 90 },
  { date: "2024-08-05", temperature: 88 },
  { date: "2024-08-06", temperature: 76 },
  { date: "2024-08-07", temperature: 80 },
];
const manageWeather = (temperatures) => {
  const temperaturesArray = temperatures.map((temp) => temp.temperature);
  const highestTemp = Math.max(...temperaturesArray);
  const lowestTemp = Math.min(...temperaturesArray);

  console.log(`Highest temperature is: ${highestTemp}`);
  console.log(`Lowest temperature is: ${lowestTemp}`);

  //average temperature
  const totalTemperature = temperatures.reduce(
    (total, currentV) => total + currentV.temperature,
    0
  );
  let averageTemp = Math.floor(totalTemperature / temperaturesArray.length);
  console.log(`Average temperature is: ${averageTemp}`);

  // day with temp threshold
  const threshold = 85;
  let hotDays = temperatures.filter((temp) => temp.temperature > threshold);
  return {
    highestTemp,
    lowestTemp,
    averageTemp: averageTemp, // Fixed to 2 decimal places
    hotDays,
  };
};
manageWeather(temperatures);
