let i = 0;
let numbers = new Array(100).fill().map(() => ++i);
const gauss_sum = numbers.reduce((acc, value) => acc += value, 0);

console.log(numbers);
console.log("Suma brojeva" ,gauss_sum);