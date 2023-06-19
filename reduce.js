const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numPar = numbers.filter((par) => par % 2 === 0);
const sumTotal = (num, sums) => (num + sums);
const total = numPar.reduce(sumTotal);
console.log(total);