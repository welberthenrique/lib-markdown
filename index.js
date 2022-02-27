import chalk from "chalk";
import * as fs from "fs";
const cl = console.log;
const verde = chalk.green;
const vermelho = chalk.red;

function tratarErro(erro) {
  if (erro.code === "EISDIR") {
    throw new Error(
      vermelho(erro.code, "Não há arquivo, pois o caminho é um diretorio.")
    );
  }
  throw new Error(vermelho(erro.code, "Arquivo selecionado não existe."));
}

//utilizando async e await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    cl(verde(texto));
  } catch (erro) {
    tratarErro(erro);
  }
}

//UTILIZANDO .then()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => log(verde(texto)))
//     .catch((erro) => tratarErro(erro));
// }

pegaArquivo("./arquivos/");
