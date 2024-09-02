/*173. Given an array of job listings, 
filter out listings that are remote and sort the remaining listings by salary.*/
const jobs = [
  { title: "Software Engineer", salary: 120000, remote: true },
  { title: "Product Manager", salary: 95000, remote: false },
  { title: "Designer", salary: 75000, remote: true },
  { title: "Data Scientist", salary: 110000, remote: false },
];

const filterRemote = (jobs) => {
  const filtered = jobs.filter((job) => job.remote);
  filtered.sort((a, b) => a.salary > b.salary);

  return filtered;
};
console.log(filterRemote(jobs));
