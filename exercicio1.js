// MUDANÇA VAR PARA LET E APAGAR CONSOLE FORA DO ESCOPO

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
// }
// imprimeIdade()


// MUDAR CONST PARA LET

// let pessoa = {
//     nome: 'Henri',
//     idade: 20
// }
// pessoa = {
//     nome: 'Luna',
//     idade: 19
// } 
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);


// MUDAR CONST PARA LET

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);


// TEMPLATE LITERALS

// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${name} ${lastName}!`);
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);


// TRANSFORMAR EM ARROW FUNCTIONS

// const numeroAleatorio = () => Math.random()
// console.log(numeroAleatorio());


// TRANSFORMAR EM ARROW FUNCTIONS

// const hello = (nome) => `Olá, ${nome}!`
// let nome = 'Ivan';
// console.log(hello(nome));


// TRANSFORMAR EM ARROW FUNCTIONS

let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));