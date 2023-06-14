const { removeItem } = require("../removeItem.js");

describe("Testa a função removeItem()", () => {
  const arr = [1, 2, 3, 4];

  it("Verifica se a chamada da função retorna um array removendo o item correto", () => {
    expect(removeItem(arr, 3)).toEqual([1, 2, 4]);
    expect(removeItem(arr, 5)).toEqual([1, 2, 3, 4]);
    expect(removeItem(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
});
