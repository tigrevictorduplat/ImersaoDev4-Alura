var nomeAluno = prompt("Olá, eu sou a Calculadora de Média, qual o seu nome?");
var notasUnidade = [0,0,0,0];
var i = 0;
var incrementoNota = 0;
while (i<=3) {
  notasUnidade[i] = prompt("Qual a "+(i+1)+"ª nota?");  
incrementoNota = incrementoNota +parseFloat(notasUnidade[i]);
  i++;
}
var notaFinal = (incrementoNota)/4;
notaFinal.toFixed(1);
console.log(notaFinal);
/* Desafio 1 - Mensagem de Aprovação*/
if (notaFinal>=6.5) {
  console.log("Parabéns "+nomeAluno+"! Você passou!");
 document.getElementById("resultadoMedia").innerText = "Parabéns "+nomeAluno+"! Você passou com nota final "+notaFinal;
} else {
  console.log("Infelizmente "+nomeAluno+" ficou de recuperação");
  document.getElementById("resultadoMedia").innerText = "Infelizmente, com a nota "+notaFinal+", "+nomeAluno+" ficou de recuperação";
}

/* Desafio 5 - Conta inteira no notaFinal
var notaFinal= (notasUnidade[0]+notasUnidade[1]+notasUnidade[2]+notasUnidade[3])/4;
console.log(notaFinal);
*/ 
