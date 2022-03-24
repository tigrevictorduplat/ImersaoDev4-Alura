// Listas para Armazenar as URLs, os Titulos e para Acompanhar o Index dos Titulos
var listaBanner = []; 
var listaTitulo = [];
var rastreadorDeleteIndex = [0];
var indexBanner = 0;
// Inicializando variáveis que receberão .values
var bannerTituloString = "";
var urlInputString = "";
// Conectando variáveis a elementos do HTML
  //Inputs
const urlInput = document.querySelector("#display-text"); 
const bannerTitulo = document.querySelector("#display-name");
  //Divs
const divDisplay = document.getElementById("display-banner");
const divDelete = document.getElementById("delete-field");
/* Funções */
  // Utilizada para instanciar <img> e <h2> 
function fabricaElemento(lista, conteudo) {
  if (conteudo.endsWith(".jpg") || conteudo.endsWith(".jpeg")) {
    const classeBanner = "novo-banner";
    let concatString =
      "<img class=" + classeBanner + " src=" + lista[indexBanner] + ">";
    return concatString;
  } else {
    const classeBanner = "nova-legenda";
    let concatString =
      "<h2 class=" + classeBanner + ">" + lista[indexBanner] + "</h2>";
    return concatString;
  }
}
  // Utilizada para adicionar os elementos fabricados na `fabricaElemento()`
function empurrarElemento(lista, conteudo) {
  lista.push(conteudo);
  divDisplay.insertAdjacentHTML("beforeend", fabricaElemento(lista, conteudo));
}
  //Checa repetições, para evitar Titulos e Banners repetidos
function checarTitulo() {
  let checkArray = listaTitulo.includes(bannerTituloString);
  let checkFinal = !checkArray ? true : false;
  return checkFinal;
}
function checarValidacaoBanner() {
  let checkUrl =
    urlInputString.endsWith(".jpg") || urlInputString.endsWith(".jpeg")
      ? true
      : false;
  // Termina com  .jpg ou .jpeg? => true
  let checkArray = listaBanner.includes(urlInputString);
  console.log(checkUrl + " " + checkArray);
  let checkFinal = checkUrl && !checkArray ? true : false;
  // Termina com as extensões corretas e não está no Array? => true
  return checkFinal;
}
  //Função chamada pelo botão Adicionar, ela recebe os Inputs de URL e Titulo e Empurra ambos no Div Display 
function adicionarBanner() {
  urlInputString = urlInput.value;
  bannerTituloString = bannerTitulo.value;
  if (checarValidacaoBanner() && checarTitulo()) {
    empurrarElemento(listaBanner, urlInputString);
    empurrarElemento(listaTitulo, bannerTituloString);
    acompanharIndexDelete();
    indexBanner++;
    ativarDelete();
    urlInput.value = "";
    bannerTitulo.value = "";
  }
}
  //Função chamada pelo botão Deletar, recebe o Input do Deletar com a posição do filme (1°, 2° 3°), excluindo junto a ele o Titulo
function deletarBanner() {
  let inputDelete = document.querySelector("#input-delete");
  let indexDelete = inputDelete.value - 1;
  let imagemDeleteIndex = rastreadorDeleteIndex[indexDelete];
  let elementoDeletado = document.getElementById("display-banner");
  let elementoTituloDeletado = listaBanner.splice(indexDelete, 1);
  listaTitulo.splice(indexDelete, 1);
  elementoDeletado.children[imagemDeleteIndex].remove();
  elementoDeletado.children[imagemDeleteIndex].remove();
  inputDelete.value = "";
  rastreadorDeleteIndex.pop;
  ativarDelete();
  indexBanner--;
}
  // Checa se existe algum elemento adicionado, se não, o bloco do Delete é escondido
function ativarDelete() {
  divDelete.hidden = listaBanner.length == 0 ? true : false;
}
  // Acompanha a posição dos Banners no Div Display
function acompanharIndexDelete() {
  let proximoNum = rastreadorDeleteIndex[indexBanner] + 2;
  rastreadorDeleteIndex.push(proximoNum);
}