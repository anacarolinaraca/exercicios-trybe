// Função 1

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    return `Tryber ${nome} aqui!`
}


// Função 2

const minhasSkills = () => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let frase = 'Minhas três principais habilidades são:';
    return `${substituaX('Ana')}
${frase}
${skills}`;
}

console.log(minhasSkills());