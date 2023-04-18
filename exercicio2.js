// Questão 1

const ligaDesliga = (motor) => {
    motor = motor === 'desligado' ? 'ligado' : 'desligado';
    console.log(`O motor está ${motor}`);
    return motor;
}
ligaDesliga();

