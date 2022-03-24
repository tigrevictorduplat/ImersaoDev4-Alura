var listaBanner = []; 
var listaTitulo = [];
var rastreadorDeleteIndex = [0];
var indexBanner = 0;
var bannerTituloString = "";
var urlInputString = "";
const urlInput = document.querySelector("#display-text");
const bannerTitulo = document.querySelector("#display-name");
const divDisplay = document.getElementById("display-banner");
const divDelete = document.getElementById("delete-field");
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
function empurrarElemento(lista, conteudo) {
  lista.push(conteudo);
  divDisplay.insertAdjacentHTML("beforeend", fabricaElemento(lista, conteudo));
}
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
  let checkFinal = checkUrl && !checkArray ? true : false;
  // Termina com as extensões corretas e não está no Array? => true
  return checkFinal;
}
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
function ativarDelete() {
  divDelete.hidden = listaBanner.length == 0 ? true : false;
}
function acompanharIndexDelete() {
  let proximoNum = rastreadorDeleteIndex[indexBanner] + 2;
  rastreadorDeleteIndex.push(proximoNum);
}