import fetch from "node-fetch";

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
  //promise async await
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const res = await fetch(url);
        return `${res.status} - ${res.statusText}`;
      })
    );
    return arrayStatus;
  } catch (erro) {
    manejaErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  //loop para cada objeto {chave:valor}
  //pegar o objeto e retornar um array apenas com o valor
  //Object.values(objeto);
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  //console.log(arrayLinks, statusLinks);
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
  }));
  return resultados;
}

export default validaURLs;
