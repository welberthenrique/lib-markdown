import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURLs from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDeArqivo) {
  const resultado = await pegaArquivo(caminhoDeArqivo[2]);
  if (caminho[3] === "validar") {
    console.log(chalk.yellow("links validados"), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow("lista de links"), resultado);
  }
}

processaTexto(caminho);
