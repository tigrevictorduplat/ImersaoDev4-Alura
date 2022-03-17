var listaBanner = [];
const urlInput = document.getElementById("display-text");
const divDisplay = document.getElementById("display-banner");
function estruturaConcat(url) {
  const classeBanner = "novo-banner";
  var concatString = "<img class=" + classeBanner + " src=" + url + ">";
  return concatString;
}
function AdicionarBanner() {
  divDisplay.innerHTML = estruturaConcat(urlInput.value);
  console.log(estruturaConcat(urlInput.value));
}
