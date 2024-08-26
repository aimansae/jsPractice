/*45. You have an array of user activities, each with userId, activityType, and timestamp.
Create a summary that counts the number of each activity type per user.
*/

let activities = [
  { id: "Alice", activityType: "cooking", time: "14:00" },
  { id: "Bob", activityType: "running", time: "12:00" },
  { id: "Charlie", activityType: "eating", time: "11:00" },
  { id: "David", activityType: "reading", time: "10:00" },
  { id: "Bob", activityType: "eating", time: "11:00" },
  { id: "Alice", activityType: "reading", time: "10:00" },
];

const userActivity = (activities) => {
  let totalActivities = {};
  activities.forEach((activity) => {
    let userName = activity.id;

    if (totalActivities[userName]) {
      totalActivities[userName]++;
    } else {
      totalActivities[userName] = 1;
    }
  });

  return totalActivities;
};

console.log(userActivity(activities));
