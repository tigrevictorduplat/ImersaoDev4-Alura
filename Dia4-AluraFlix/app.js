var listaBanner = [];
var imgTagBanner = []; 
var indexBanner = 0;
var urlInputString = "";
const urlInput = document.querySelector("#display-text");
const divDisplay = document.getElementById("display-banner");
const divDelete = document.getElementById("delete-field");

function ativarDelete() {
  divDelete.hidden = listaBanner.length == 0 ? true : false;
}

function AdicionarBanner() {
  urlInputString = urlInput.value;
  if (checarValidacaoBanner()) {
    listaBanner.push(urlInputString);
    divDisplay.insertAdjacentHTML("beforeend", estruturaConcat(listaBanner));
    indexBanner++;
    ativarDelete();
    urlInput.value = "";
  }
}

function estruturaConcat(listaBanner) {
  const classeBanner = "novo-banner";
  let concatString =
    "<img class=" +
    classeBanner +
    " src=" +
    listaBanner[indexBanner] +
    ">";
  imgTagBanner[indexBanner] = concatString
  return concatString;
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

function deletarBanner() {
  let inputDelete = document.querySelector("#input-delete");
  let indexDelete = inputDelete.value - 1;
  let elementoDeletado = document.getElementById(idString);
  listaBanner.splice(indexDelete, 1);
  elementoDeletado.remove();
  inputDelete.value = "";
  ativarDelete();
  indexBanner--;
}

