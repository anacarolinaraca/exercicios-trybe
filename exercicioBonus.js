// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Crescente

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
// }

// console.log(numbers);

// Descrescente

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
// }

// console.log(numbers);


// Multiplicando array

// let multiplicador = [];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (index < (numbers.length - 1)) {
//         multiplicador.push(numbers[index] * numbers[index + 1]);
//     } else {
//         multiplicador.push(numbers[index] * 2);
//     }
// }

// console.log(multiplicador);

// Formas geométricas

let n = 7;
let asterisco = '*';
let linhas = '';
let position = n -1;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

// Triangulo para a direita

// for (let lines = 0; lines < n; lines += 1) {
//     linhas = linhas + asterisco;
//     console.log(linhas);
// };

// Quadrado

// for (let lines = 0; lines <= n; lines += 1) {
//   console.log(linhas);
// };

// Triangulo para a esquerda

// for (let lines = 0; lines < n; lines += 1) {
//   for (let linesColum = 0; linesColum < n; linesColum += 1) {
//     if (linesColum < position) {
//       linhas = linhas + ' ';
//     } else {
//       linhas = linhas + asterisco;
//     }
//   }

//   console.log(linhas);
//   linhas = '';
//   position -= 1;
// };


// Arvore

// for (let lines = 0; lines <= meio; lines += 1) {
//     for (let linesColum = 0; linesColum <= n; linesColum += 1) {
//       if (linesColum > esquerda && linesColum < direita) {
//         linhas = linhas + asterisco;
//       } else {
//         linhas = linhas + ' ';
//       }
//     }
//     console.log(linhas);
//     linhas = '';
//     direita += 1;
//     esquerda -= 1
//   };

// Arvore vazia no meio

for (let line = 1; line <= meio; line += 1) {
  let linha = '';
  for (let colum = 1; colum <= n; colum += 1) {
    if (colum == esquerda || colum == direita || line == meio) {
      linha += asterisco;
    } else {
      linha += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(linha);
}