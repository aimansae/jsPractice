/*143. Updating user profiles in an application.*/
const userProfile = {
  username: "john_doe",
  email: "john.doe@example.com",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const updateData = (userProfile, newEmail, newZipCode, newLocation) => {
  userProfile.email = newEmail;
  userProfile.address.zip = newZipCode;

  // add new filter
  userProfile.location = newLocation;
  return userProfile;
};

console.log(
  updateData(userProfile, "updatedemail@gmail.com", "4000", "Location")
);
