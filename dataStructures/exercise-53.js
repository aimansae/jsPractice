/*52.  You have an email subscription service where users can sign up for newsletters. 
Users can sign up multiple times, but you only want to store unique email addresses. 
Use a data structure to manage the list of email subscribers, ensuring no duplicates.
 */

const mailingList = new Set();

const addEmail = (email) => {
  if (validateEmail(email)) {
    mailingList.add(email.toLowerCase());
    console.log(email);
  } else {
    console.log(`Invalid email ${email}`);
  }
};
const getAllEmails = () => {
  return [...mailingList];
};
const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};
addEmail("example@example.com");
addEmail("test@test.com");
addEmail("Example@Example.com");
addEmail("invalid-email");
console.log("All emails:", getAllEmails());
