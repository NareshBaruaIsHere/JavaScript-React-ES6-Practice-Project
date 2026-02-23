//BMI = weight (in kg) ÷ (height in meters × height in meters)

let weightKg = 60;
let heightM = 2;

let bmi = weightKg / (heightM * heightM);
console.log("BMI:", bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("underweight");
} else if (bmi < 24.9) {
  console.log("normal weight");
} else if (bmi < 29.9) {
  console.log("overweight");
} else {
  console.log("obese");
}
