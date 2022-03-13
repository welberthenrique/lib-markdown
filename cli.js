import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURLs from "./http-validacao.js";
const yellow = chalk.yellow;

// eslint-disable-next-line no-undef
const caminho = process.argv;

async function processaTexto(caminhoDeArqivo) {
  const resultado = await pegaArquivo(caminhoDeArqivo[2]);
  if (caminho[3] === "validar") {
    console.log(yellow("links validados"), await validaURLs(resultado));
  } else {
    console.log(yellow("lista de links"), resultado);
  }
}

processaTexto(caminho);
