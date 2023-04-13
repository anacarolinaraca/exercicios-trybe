let student = {
    firstName: 'Ana Carolina',
    lastName: 'Alves',
}

let adicionarObjetos = (objeto, key, valor) => {
    objeto[key] = valor;
};

adicionarObjetos(student, 'email', 'anacarolina@email.com.br');
adicionarObjetos(student, 'tel', '31 99999-5555');
adicionarObjetos(student, 'gitHub', 'anacarolinaraca');
adicionarObjetos(student, 'linkedin', 'anacarolinaraca');

console.log(student);