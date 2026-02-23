let celsius = 25;
let fahrenheit = 77;

let resultF = (celsius * 9) / 5 + 32;
console.log(`${celsius}C = ${resultF}F`);

let resultC = ((fahrenheit - 32) * 5) / 9;
console.log(`${fahrenheit}F = ${resultC.toFixed(2)}C`);
