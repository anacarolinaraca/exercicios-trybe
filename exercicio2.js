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