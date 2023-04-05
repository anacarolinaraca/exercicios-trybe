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

// let ang1 = 0;
// let ang2 = 40;
// let ang3 = 90;

// let soma = ang1 + ang2 + ang3;

// let angPositivos = ang1 > 0 && ang2 > 0 && ang3 > 0;

// if (angPositivos) {
//     if (soma === 180){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log('Ângulo inválido!!');
// }




// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// let movimento = "cavalo";

// switch (movimento) {
//     case "bispo":
//         console.log("Bispo - Se move em uma linha reta diagonalmente no tabuleiro");
//     break; 
//     case "peão":
//         console.log("Peão - Se movem somente para frente, uma casa por vez, apenas na primeira vez que se move duas casas");
//     break; 
//     case "torre":
//         console.log("Torre - Se move em linha reta horizontalmente e verticalmente");
//     break; 
//     case "cavalo":
//         console.log("Cavalo - Se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto");
//     break; 
//     case "rainha":
//         console.log("Rainha - Se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
//     break; 
//     case "rei":
//         console.log("Rei - Se move para qualquer casa adjacente");
//     break; 
//     default:
//         console.log("Peça inválida!!");
// } 





// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = 60;

// if (nota > 100 || nota < 0) {
//     console.log("Nota inválida");
// } else if (nota >= 90) {
//     console.log("A");
// } else if (nota >= 80) {
//     console.log("B");
// } else if (nota >= 70) {
//     console.log("C");
// } else if (nota >= 60) {
//     console.log("D");
// } else if (nota >= 50) {
//     console.log("E");
// } else if (nota < 50) {
//     console.log("F");
// } 




// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

// const num1 = 1;
// const num2 = 3;
// const num3 = 5;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log(true); 
// } else {
//     console.log(false);
// }




// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// const num1 = 2;
// const num2 = 4;
// const num3 = 1;

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log(true); 
// } else {
//     console.log(false);
// }




// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

let custoProduto = 2;
let valorVenda = 5;

let vendas;
let lucro;

if (custoProduto >= 0 && valorVenda >= 0){
    vendas = custoProduto * 1.2;
    lucro = (valorVenda - vendas) * 1000;
    console.log(lucro);
} else {
    console.log("Não teve lucro");
}


// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

