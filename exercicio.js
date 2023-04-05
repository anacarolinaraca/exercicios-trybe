// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

// let a = 8;
// let b = 4;

// let soma = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let resto = a % b;
// let potencia = a ** b;

// console.log(soma, subtracao, multiplicacao, divisao, resto, potencia);




// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

// const x = 3;
// const y = 2;

// if (x > y) {
//     console.log(x + " é maior que " + y);
// } else {
//     console.log(y + " é maior que " + x);
// }




// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

// const v = 5;
// const c = 6;
// const d = 4;

// if (v > c && v > d) {
//     console.log(v + " é maior que " + c + " e " + d);
// } else if (c > v && c > d) {
//     console.log(c + " é maior que " + v + " e " + d);
// } else {
//     console.log(d + " é maior que " + v + " e " + c);
// }




// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

// let valor = -1;

// if (valor > 0) {
//     console.log("positive");
// } else if (valor < 0){
//     console.log("negative");
// } else {
//     console.log("zero");
// }



// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let ang1 = 0;
let ang2 = 40;
let ang3 = 90;

let soma = ang1 + ang2 + ang3;

let angPositivos = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (angPositivos) {
    if (soma === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Ângulo inválido!!');
}




// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.