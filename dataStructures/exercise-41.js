/* 41.You have an array of purchase records, each with a userId and purchaseId.
Identify users who have made more than one purchase.
*/

let purchases = [
  { userId: "user1", purchaseId: "p1" },
  { userId: "user2", purchaseId: "p2" },
  { userId: "user1", purchaseId: "p3" },
  { userId: "user3", purchaseId: "p4" },
  { userId: "user2", purchaseId: "p5" },
  { userId: "user1", purchaseId: "p6" },
];

const calculatePurchases = (purchases) => {
  let purchaseCount = {};

  purchases.forEach((purchase) => {
    let userId = purchase.userId;
    if (purchaseCount[userId]) {
      purchaseCount[userId]++;
    } else purchaseCount[userId] = 1;
  });

  console.log("Purchases", purchaseCount);
  let usersWithMultiplePurchases = Object.keys(purchaseCount).filter(
    (userId) => purchaseCount[userId] > 1
  );
  return usersWithMultiplePurchases;
};

console.log(calculatePurchases(purchases));
