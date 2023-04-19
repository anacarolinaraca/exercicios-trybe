// Questão 1

const ligaDesliga = (motor) => {
    motor = motor === 'desligado' ? 'ligado' : 'desligado';
    console.log(`O motor está ${motor}`);
    return motor;
}
ligaDesliga();


// Questão 2

const calcAreaCirculo = (raio) => {
    let area = 3.14 * (raio ** 2);
    return area;
}

console.log(calcAreaCirculo(2));


// Questão 3

let longestWord = (frase) => {
    let palavra = frase.split(' ');
    let letras = 0;
    let maiorPalavra = '';
    for (const palavras of palavra) {
        if (palavras.length > letras){
        letras = palavras.length;
        maiorPalavra = palavras;
        }
    }
    return maiorPalavra;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));