let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somar = 0;
let imparResult = 0;

let numberMenor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    const element = numbers[index];
    console.log(element);
}

for (let i = 0; i < numbers.length; i += 1) {

    somar += numbers[i];

    if (numbers[i] % 2 !== 0) {
        imparResult += 1;
    }
}

console.log(somar);
let media = somar / numbers.length;
console.log(media);

if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}

let maiorValor = Math.max(...numbers);
console.log(maiorValor);

if (imparResult === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(imparResult);
}

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < numberMenor) {
    numberMenor = numbers[index];
    console.log(numberMenor);
    }
}

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}
console.log(numbers);

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index] / 2);
}