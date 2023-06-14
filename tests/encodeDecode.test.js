const { encode, decode } = require("../encodeDecode");

describe("Testa as funções encode() e decode()", () => {
  it("Verifica se encode e decode são funções", () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it("Verifica se as vogais a, e, i, o, u da função encode são convertidas em 1, 2, 3, 4, 5, respectivamente", () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
  it("Verifica se os números 1, 2, 3, 4, 5 da função decode são convertidos nas vogais a, e, i, o, u, respectivamente", () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
  it("Verifica se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(decode('Ana').length).toEqual(3);
    expect(encode('Ana').length).toEqual(3);
  });
});
