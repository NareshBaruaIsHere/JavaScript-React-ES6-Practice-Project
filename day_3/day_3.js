//If conditional

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}

console.log(greeting);
