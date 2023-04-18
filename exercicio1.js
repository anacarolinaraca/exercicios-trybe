// MUDANÇA VAR PARA LET E APAGAR CONSOLE FORA DO ESCOPO

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
// }
// imprimeIdade()


// MUDAR CONST PARA LET

  let pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa = {
    nome: 'Luna',
    idade: 19
  } 
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);