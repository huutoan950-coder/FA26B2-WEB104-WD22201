const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
const doubledEvenNumbers = evenNumbers.map((num) => num * 2);

console.log("Số chẵn:", evenNumbers);
console.log("Số chẵn nhân đôi:", doubledEvenNumbers);
