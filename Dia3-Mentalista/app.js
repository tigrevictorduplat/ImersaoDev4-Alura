var numeroImaginario = parseInt(Math.random() * 11);
//console.log(numeroImaginario);
const elementoBotaoChute = document.getElementById("tentativa");
const elementoResultado = document.getElementById("resultado");
const elementoDica = document.getElementById("dica");
const botaoTentativa = document.getElementById("nova-tentativa");
var numeroTentativas = 0;
var tentativasRestantes = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (numeroTentativas < 3) {
    if (chute == numeroImaginario) {
      numeroTentativas++;
      elementoResultado.innerHTML =
        "Você acertou! Em " + numeroTentativas + " tentativas parabéns!";
      elementoBotaoChute.disabled = true;
      botaoTentativa.style.visibility = "visible";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Escolha um número de 0 a 10!";
    } else {
      ChecarDica(chute, numeroImaginario);
      numeroTentativas++;
      tentativasRestantes--;
      elementoResultado.innerHTML =
        "Você errou! Mas ainda tem " + tentativasRestantes + " tentativas";
      if (tentativasRestantes == 0) {
        MensagemGameOver();
      }
    }
  } else {
    MensagemGameOver();
  }
}
function ChecarDica(chute, numeroImaginario) {
  var dica;
  if (chute > numeroImaginario) {
    dica = "menor que " + chute + " !";
  } else {
    dica = "maior que " + chute + " !";
  }
  elementoDica.innerHTML = "Dica! O número imaginário é " + dica;
}
function Reiniciar() {
  numeroImaginario = parseInt(Math.random() * 11);
  //console.log(numeroImaginario);
  numeroTentativas = 0;
  tentativasRestantes = 3;
  elementoDica.innerHTML = "";
  elementoResultado.innerHTML = "";
  elementoBotaoChute.disabled = false;
  botaoTentativa.style.visibility = "hidden";
}
function MensagemGameOver() {
  elementoBotaoChute.disabled = true;
  botaoTentativa.style.visibility = "visible";
  elementoResultado.innerHTML =
    "Game Over!" +
    "<br>" +
    " Não foi dessa vez... o número era " +
    numeroImaginario;
}
