/*171. Extract Unique Values from Array of Objects const records = [
 */
const records = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "apple" },
];

const unique = (records) => {
  const map = records.map((item) => item.name);
  console.log(map);
  const setFromMAp = new Set(map);
  console.log("set created", setFromMAp);

  const uniqueRecords = records.filter(
    (item, index, self) =>
      self.findIndex((obj) => obj.name === item.name) === index
  );

  return uniqueRecords;
};
unique(records);
