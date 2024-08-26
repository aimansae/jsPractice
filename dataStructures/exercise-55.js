/*55.  You have an array of user profiles, each containing a list of interests. 
You want to find the common interests among all users, 
ensuring no duplicates in the list of common interests.
 */
const userProfiles = [
  { interests: ["JavaScript", "React", "Node.js"] },
  { interests: ["React", "JavaScript", "HTML"] },
  { interests: ["JavaScript", "CSS", "React"] },
];

const findCommonInterests = (profiles) => {
  let commonInterests = new Set([profiles[0].interests]);
  console.log(commonInterests);

  for (let i = 1; i < userProfiles; i++) {
    commonInterests = new Set(
      [...commonInterests].filter((interest) =>
        userProfiles[i].interests.includes(interest)
      )
    );
  }
};

findCommonInterests(userProfiles);
