// hydrate.js
const hydrate = (frasesBebidas) => {
  const bebidas = frasesBebidas.split('');
  let copoAgua = 0;

  for (let i = 0; i < bebidas.length; i += 1) {
    const frases = parseInt(bebidas[i]);

    if (frases) {
      copoAgua += frases;
    }
  }

  let coposDeAgua = 'copo';

  if (copoAgua > 1) {
    coposDeAgua = 'copos';
  }

  return `${copoAgua} ${coposDeAgua} de água`;
};

console.log(hydrate('1 cerveja'));

module.exports = hydrate;
