const sorteio = (jogadas, jogo) => jogadas === jogo;

const result = (jogadas, num) => {
    const jogo = Math.floor((Math.random() * 5) + 1);
    return num(jogadas, jogo) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

console.log(result(1, sorteio));
console.log(result(1, sorteio));
console.log(result(1, sorteio));
console.log(result(1, sorteio));