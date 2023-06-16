const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = () => {
  const autor = books.find((years) => years.author.birthYear === 1947).author
    .name;
  return autor;
};

console.log(authorBornIn1947());

const smallerName = () => {
  let nameBook;

  books.forEach((nameBooks) => {
    if (!nameBook || nameBooks.name.length < nameBook.length) {
      nameBook = nameBooks.name;
    }
  });
  return nameBook;
};
console.log(smallerName());

const getNamedBook = () => {
  const livro = books.find((lengthLivro) => lengthLivro.name.length === 26);
  return livro;
};
console.log(getNamedBook());

const everyoneWasBornOnSecXX = () => {
  const yearsXX = books.every(
    (century) =>
      century.author.birthYear > 1900 && century.author.birthYear < 2000
  );
  return yearsXX;
};
console.log(everyoneWasBornOnSecXX());

const authorUnique = () => {
    return books.every((years) =>
        (!books.some((year) => year.author.birthYear === years.author.birthYear))
    )
}
console.log(authorUnique());
