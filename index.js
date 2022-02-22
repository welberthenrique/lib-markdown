import chalk from "chalk";
import * as fs from "fs";
const log = console.log;

function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no caminho."));
}

function pegaArquigo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => log(chalk.green(texto)))
    .catch((erro) => tratarErro(erro));
}

// function pegaArquigo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       tratarErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

pegaArquigo("./arquivos/texto1.md");
