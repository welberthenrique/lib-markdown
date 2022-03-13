import chalk from "chalk";
import { promises } from "fs";

const cl = console.log;
// eslint-disable-next-line no-unused-vars
const verde = chalk.green;
const vermelho = chalk.red;
const amarelo = chalk.yellow;

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0
    ? "Não há links no arquivo"
    : arrayResultados;
}

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
    const texto = await promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    tratarErro(erro);
  } finally {
    cl(amarelo("Operação concluída!"));
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

//pegaArquivo("./arquivos/texto1.md");

export default pegaArquivo;
