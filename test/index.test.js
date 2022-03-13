import { pegaArquivo } from "../index";

test("Deve ser uma função", () => {
  //retorno da função 3
  expect(typeof pegaArquivo).toBe("function");
});
