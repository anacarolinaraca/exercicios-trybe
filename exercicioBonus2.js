// NUMERO ROMANO

// let numbers = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000
// }

// let convertNumber = (numero) => {
//     numero = numero.toLowerCase();
//     let soma = numbers[numero[numero.length - 1]];
//     let numeroAtual = numbers[numero[numero.length - 1]];

//     for (let numb = 2; numb <= numero.length; numb += 1) {
//         let num = numbers[numero[numero.length - numb]];

//         if (numeroAtual <= num) {
//             soma += num;
//         } else {
//             soma -+ num;
//         };
//     };
//     return soma;
// };

// console.log(convertNumber('V'));

// VETOR

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// let arrayOfNumbers = (vector) => {
//     let novoVector = [];
//     for (let i = 0; i < vector.length; i += 1) {
//         let element = vector[i];
        
//         for (let i2 = 0; i2 < element.length; i2 += 1) {
//             let num = element[i2];
            
//             if ((num % 2) === 0) {
//                 novoVector.push(num);
//             }
//         }

//     }
//     return novoVector;
// };

// console.log(arrayOfNumbers(vector));


// OBJETO FRUTAS

// let basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// let frutas = {};

// for (let cesta = 0; cesta < basket.length; cesta += 1) {
//     let elementosCesta = basket[cesta];
//     if (!frutas[elementosCesta]) {
//         frutas[elementosCesta] = 0;
//     }
//         frutas[elementosCesta] += 1;
// };

// let objetoArray = [];

// for (const elementosCesta in frutas) {
//    let receba = `${frutas[elementosCesta]} ${elementosCesta}`;
//    if (frutas[elementosCesta] > 1) {
//     receba += 's';
//     }
//     objetoArray.push(receba);
// };

// console.log(`Sua cesta possui: ${objetoArray.join(',')}.`);


// CHAVE NOMES

let moradores = {
    blocoUm: [
      {
        nome: 'Luíza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
};

// console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`);

for (let predio = 0; predio < moradores.blocoUm.length; predio += 1){
    console.log(moradores.blocoUm[predio].nome + ' ' + moradores.blocoUm[predio].sobrenome);
}

for (let predio = 0; predio < moradores.blocoDois.length; predio += 1){
    console.log(moradores.blocoDois[predio].nome + ' ' + moradores.blocoDois[predio].sobrenome);
}