/*118. Build a system to log user activities. 
generate activity reports for specific users by id or activity.*/

const activityLog = [
  { userId: "user1", action: "login", timestamp: "2024-09-01T09:00:00" },
  { userId: "user2", action: "view", timestamp: "2024-09-01T10:00:00" },
];

const filterById = (userId) => {
  return activityLog.filter((activity) => activity.userId === userId);
};
const filterByAction = (action) => {
  return activityLog.filter((activity) => activity.action === action);
};

console.log(filterById("user1")); // Filter by userId
console.log(filterByAction("login")); // Filter by action
