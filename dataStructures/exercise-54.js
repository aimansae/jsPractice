/*54. You are tracking visitors to your website. 
Each visitor is identified by their IP address. 
Throughout the day, you want to track how many unique visitors have accessed your site, 
even if they visit multiple times.*/

const uniqueVisitors = new Set();

const trackVisitors = (ipAddress) => {
  uniqueVisitors.add(ipAddress);
};

const countUniqueVisitors = () => {
  return uniqueVisitors.size;
};
trackVisitors("192.168.1.1");
trackVisitors("192.168.1.2");
trackVisitors("192.168.1.1"); // Duplicate, should not increase the count
trackVisitors("192.168.1.3");

// Get the count of unique visitors
console.log(`Total unique visitors: ${countUniqueVisitors()}`);
