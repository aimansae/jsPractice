/*25. You have an array of product reviews, each with a rating.
Calculate the average rating.
*/

let reviews = [
  { productId: "A", rating: 4 },
  { productId: "B", rating: 5 },
  { productId: "A", rating: 3 },
  { productId: "B", rating: 4 },
  { productId: "C", rating: 2 },
];

let sum = reviews
  .map((review) => review.rating)
  .reduce((sum, rating) => sum + rating);
let average = sum / reviews.length;

console.log(average);
