var listaBanner = [];
var indexBanner = 0;
const urlInput = document.getElementById("display-text");
const divDisplay = document.getElementById("display-banner");
function estruturaConcat(url) {
  /*
  const classeBanner = "novo-banner";
  var concatString = "<img class=" + classeBanner + " src=" + url + ">";
  return concatString;
  */
  const classeBanner = "novo-banner";
  var concatString = "class=" + classeBanner + " src=" + url;
  return concatString;
}

function AdicionarBanner() {
  var newImg = divDisplay.createElement("img");
  listaBanner.push(urlInput.value);
  newImg.appendChild(estruturaConcat(listaBanner[indexBanner]));
  indexBanner++;
}
