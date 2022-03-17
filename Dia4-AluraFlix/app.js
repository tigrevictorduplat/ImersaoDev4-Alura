var listaBanner = [];
var indexBanner = 0;
const urlInput = document.getElementById("display-text");
const divDisplay = document.getElementById("display-banner");
function estruturaConcat(listaBanner) {
  const classeBanner = "novo-banner";
  let concatString =
    "<img class=" + classeBanner + " src=" + listaBanner[indexBanner] + ">";
  return concatString;
}

function AdicionarBanner() {
    let check = listaBanner.includes(urlInput.value);
    if (!check) {
      listaBanner.push(urlInput.value);
      divDisplay.insertAdjacentHTML("beforeend", estruturaConcat(listaBanner));
      indexBanner++;
    }
  }