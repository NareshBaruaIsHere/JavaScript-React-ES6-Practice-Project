//If conditional

// const hour = new Date().getHours();
// let greeting;

// if (hour < 18) {
//   greeting = "Good Day";
// } else {
//   greeting = "Good Evening";
// }

// console.log(greeting);

//? ternary
// let age = 20;
// let t = (age < 18) ? "Minor" : "Adult";
// console.log(t);

let price = 2;
let isMember = false;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount);

console.log(total);
