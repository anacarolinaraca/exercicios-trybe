const mediaAluno = (nota1, nota2, nota3, nota4) => {
    if(typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number' || typeof nota4 !== 'number') {
        throw new Error('Você deve digitar apenas números');
    }
}

const calcularMedia = (nota1, nota2, nota3, nota4) => {
    try {
        mediaAluno(nota1, nota2, nota3, nota4);
        const soma = nota1 + nota2 + nota3 + nota4;
        const media = soma / 4;
        return media;
    } catch (error) {
        return error.message;
    }
}

console.log(calcularMedia(4, 5, 3, 1));