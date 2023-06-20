const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = () => arrays.reduce((arrayNums, strings) => arrayNums.concat(strings), []);

// console.log(flatten());

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

const namesArray = () => books.reduce((names, strings, index) => {
    if (index === books.length - 1) {
        return `${names}${strings.author.name}.`;
      }
      return `${names}${strings.author.name}, `;
    }, '');

// console.log(namesArray());

const averageAge = () => {

    const qntBooks = books.length;

    const sumAges = books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear), 0);
    
    return sumAges / qntBooks;
};

// console.log(averageAge());
  
    const longestNamedBook = () => {
        return books.reduce((biggestBook, currentBook) => {
            return (biggestBook.name.length > currentBook.name.length) ? biggestBook : currentBook
        });
}

console.log(longestNamedBook());