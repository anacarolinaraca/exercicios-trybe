let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

let turnoNoite = (objeto, key, valor) => {
    objeto[key] = valor;
};
turnoNoite(lesson2, 'turno', 'noite');
console.log(lesson2);

let listaKeys = (keys) => {
    let lista = Object.keys(keys);
    for (let index in lista) {
        console.log(lista[index]);
      }
};

listaKeys(lesson2);

let lessonLength = (tamanho) => {
    return Object.keys(tamanho).length;
};

console.log(lessonLength(lesson2));

let listValues = (values) => {
    return Object.values(values);
}

console.log(listValues(lesson1));

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons);

let numberTotal = (estudantes) => {
    let total = 0;
    for (let chaves in Object.keys(estudantes)) {
        total = total + estudantes[Object.keys(estudantes)[chaves]].numeroEstudantes;
    }
    return total;
};

console.log(numberTotal(allLessons));

let getValueByNumber = (valorChave, number) => {
    return Object.values(valorChave)[number];
};

console.log(getValueByNumber(lesson1, 0));

let verifyPair = (objeto, chave, valor) => {
    let conf = false;

    for (const key in Object.entries(objeto)) {
        if (Object.entries(objeto)[key][0] === chave && Object.entries(objeto)[key][1] === valor) {
            conf = true;
        }
    }
    return conf;
};

console.log(verifyPair(lesson1, 'professor', 'Carlos'));