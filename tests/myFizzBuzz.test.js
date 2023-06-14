const { myFizzBuzz } = require("../myFizzBuzz.js");

describe("Testa a função myFizzBuzz()", () => {

  it("Verifica um número divisível por 3 e 5, a função retorna 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it("Verifica um número divisível apenas por 3, a função retorna 'fizz'", () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it("Verifica um número divisível apenas por 5, a função retorna 'buzz'", () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it("Verifica um número que não é divisível por 3 e 5, a função retorna o próprio número", () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
  it("Se o parâmetro passado não seja um número, a função retorna false", () => {
    expect(myFizzBuzz('1')).toBe(false);
  });
});