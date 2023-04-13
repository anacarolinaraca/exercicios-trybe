// for/in = objeto e array

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
// };
  
// for (let index in car) {
//     console.log(index, car[index]);
// }

// for/ off = objetos iteráveis e não pode ser usado em objetos.

// let food = ['hambúrguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let pessoa in names) {
    console.log(`Olá, ${names[pessoa]}`);
} 

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (const key in car) {
    console.log(key, car[key]);
}