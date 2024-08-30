/*117. Build a system to log user activities. 
Implement functionality to add user actions with timestamps*/

const activityLog = [
  { userId: "user1", action: "login", timestamp: "2024-09-01T09:00:00" },
  { userId: "user2", action: "view", timestamp: "2024-09-01T10:00:00" },
];

const addActivity = (userId, action) => {
  const timestamp = new Date().toISOString();
  console.log(timestamp);
  const newUser = {
    userId,
    action,
    timestamp,
  };
  activityLog.push(newUser);
  console.log(
    `Activity recorded: ${userId} performed ${action} at ${timestamp}`
  );
};

addActivity("user3", "login");
console.log(activityLog);
