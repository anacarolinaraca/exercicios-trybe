const sum = (...numbers) => {
    return numbers.reduce(((valorInicial, valor) => valorInicial + valor), 0);
}
console.log(sum(1,2,3,5));