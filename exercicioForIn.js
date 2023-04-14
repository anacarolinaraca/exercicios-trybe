// Exercício Personagem

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log(`Bem-vinda, ${info.personagem}`);

// let recorrentes = (objeto, key, valor) => {
//   objeto[key] = valor;
// };

// recorrentes(info, 'recorrente', 'Sim');

// console.log(info);

// for (let keys in info) {
//   console.log(keys);
// }

// for (let values in info) {
//   console.log(info[values]);
// }

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };
// for (let keys in info) {
//   if (keys ==='recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim') {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(`${info[keys]} e ${info2[keys]}`);
//   }

// };



// Exercício Leitor

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}.`);

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}) 

console.log(leitor);

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);