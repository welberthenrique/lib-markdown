import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv;

async function processaTexto(caminhoDeArqivo) {
  const resultado = await pegaArquivo(caminhoDeArqivo[2]);
  console.log(chalk.yellow("lista de links"), resultado);
}

processaTexto(caminho);
