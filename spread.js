// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Manga', 'Uva', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  const saladFruit = [...fruit, ...additional];
  return saladFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));