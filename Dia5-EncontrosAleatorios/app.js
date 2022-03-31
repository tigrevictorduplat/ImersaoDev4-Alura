// Inicialização de Variavéis e Objetos
const baseCriatura = {
  nomeCriatura: "Nome da Criatura",
  nivelCriatura: 1,
  iniciativaCriatura: 0,
  ataqueCriatura: 0,
  defesaCriatura: 10,
  estadoCriatura: "--",
  pontosVidaCriatura: 0,
  pontosVidaAtuais: 0,
  pontosManaCriatura: 0,
  armaCriatura: {
    nomeArma: "",
    numDadosDano: "",
    tipoDadosDano: ""
  },
  habilidadeCriatura: {
    tituloHabilidade: "",
    efeitoHabilidade: " ",
    custoMana: " "
  },
  set novoNome(novoNome) {
    this.nomeCriatura = novoNome;
  },
  set iniciativaCriatura(novaIniciativa) {
    this.iniciativaCriatura = novaIniciativa;
  },
  set defesaCriatura(novaDefesa) {
    this.defesaCriatura = novaDefesa;
  },
  set pontosVidaCriatura(novosPVs) {
    this.pontosVidaCriatura = novosPVs;
  },
  set estadoCriatura(novoEstadoCriatura) {
    this.estadoCriatura = novoEstadoCriatura;
  },
  set pontosManaCriatura(novosPMs) {
    this.pontosManaCriatura = novosPMs;
  },

  set nivelCriatura(novoNivel) {
    this.nivelCriatura = novoNivel;
  },
  set ataqueCriatura(novoAtaque) {
    this.ataqueCriatura = novoAtaque;
  },
  set nomeArma(novoNomeArma) {
    this.armaCriatura.nomeArma = novoNomeArma;
  },
  set numDadosDano(novoNumDados) {
    this.armaCriatura.numDadosDano = novoNumDados;
  },
  set tipoDadosDano(novoTipoDado) {
    this.armaCriatura.tipoDadosDano = novoTipoDado;
  },
  set tituloHabilidade(novoTituloHabilidade) {
    this.habilidadeCriatura.tituloHabilidade = novoTituloHabilidade;
  },
  set custoMana(novoCustoMana) {
    this.habilidadeCriatura.custoMana = novoCustoMana;
  },
  set efeitoHabilidade(novoEfeitoHabilidade) {
    this.habilidadeCriatura.efeitoHabilidade = novoEfeitoHabilidade;
  }
};
var listaCriaturas = [
  {
    ...baseCriatura
  }
];
var estruturaTabelaHTML = [];
var contadorCriatura = 0;
const elementoTabela = document.getElementById("tabelaEncontros"),
  elementoDialog = document.getElementById("janela-info"),
  elementoForm = elementoDialog.querySelectorAll(".extrainfo"),
  submitInput = elementoForm[0].querySelector(`button[type="submit"]`);
//Adicionando Eventos

// Funções
function adicionarTableInput() {
  let listaInputsTb = transferirInputsTabelaParaLista();
  limparInputTabela();
  let i = 0;
  let l = contadorCriatura;
  listaCriaturas[l].nomeCriatura = listaInputsTb[i];
  i++;
  listaCriaturas[l].iniciativaCriatura = listaInputsTb[i];
  i++;
  listaCriaturas[l].defesaCriatura = listaInputsTb[i];
  i++;
  listaCriaturas[l].pontosVidaCriatura = listaInputsTb[i];
  listaCriaturas[l].pontosVidaAtuais = listaInputsTb[i];
  atualizarEstado(l);
  listaCriaturas[l].pontosManaCriatura = listaInputsTb[i];
}
function adicionarExtrasInput() {
  let listaInputsDg = transferirInputsDialogParaLista();
  limparInputDialog();
  let i = 0;
  let l = contadorCriatura;
  listaCriaturas[l].nivelCriatura = listaInputsDg[i];
  i++;
  listaCriaturas[l].nomeArma = listaInputsDg[i];
  i++;
  listaCriaturas[l].ataqueCriatura = listaInputsDg[i];
  i++;
  listaCriaturas[l].numDadosDano = listaInputsDg[i];
  i++;
  listaCriaturas[l].tipoDadosDano = listaInputsDg[i];
  i++;
  listaCriaturas[l].tituloHabilidade = listaInputsDg[i];
  i++;
  listaCriaturas[l].custoMana = listaInputsDg[i];
  i++;
  listaCriaturas[l].efeitoHabilidade = listaInputsDg[i];
}
function adicionarCriatura() {
  if (contadorCriatura != 0) {
    listaCriaturas.push({ ...baseCriatura });
  }
  controlDialog();
  let checaDialog = false;
  while (!checaDialog) {
    checaDialog = elementoDialog.open ? true : false;
  }
  adicionarTableInput();
  adicionarExtrasInput();
  atualizarTabela(listaCriaturas);
  contadorCriatura++;
}
function controlDialog() {
  if (elementoDialog.open) {
    elementoDialog.close();
  } else {
    elementoDialog.showModal();
  }
}
function declaraEstrutura(index) {
  estruturaTabelaHTML = [
    "<tr>",
    `<td class='nome-criatura'> ${listaCriaturas[index].nomeCriatura} </td>`,
    `<td>${listaCriaturas[index].iniciativaCriatura}</td>`,
    `<td>${listaCriaturas[index].defesaCriatura}</td>`,
    `<td>${listaCriaturas[index].estadoCriatura}</td>`,
    `<td>${listaCriaturas[index].pontosVidaCriatura}</td>`,
    `<td>${listaCriaturas[index].pontosManaCriatura}</td>`,
    `<td><button onClick="acaoAtacar(${index})">Ataque</button></td>`,
    `<td><button onClick="acaoHabilidade(${index})">Habilidade</button></td>`,
    `<td><button onClick="derrotarInimigo(${index})">Derrota</button></td>`,
    "</tr>"
  ];
}
function transferirInputsDialogParaLista() {
  let listaInputs = [
    document.querySelector("#nivel-criatura").value,
    document.querySelector("#nome-arma").value,
    document.querySelector("#bonus-ataque").value,
    document.querySelector("#num-dados").value,
    document.querySelector("#dado-arma").value,
    document.querySelector("#titulo-habilidade").value,
    document.querySelector("#custo-pms").value,
    document.querySelector("#efeito-habilidade").value
  ];
  return listaInputs;
}
function limparInputDialog() {
  document.getElementById("nivel-criatura").value = " ";
  document.getElementById("nome-arma").value = " ";
  document.getElementById("bonus-ataque").value = " ";
  document.getElementById("num-dados").value = " ";
  document.getElementById("dado-arma").value = " ";
  document.getElementById("titulo-habilidade").value = " ";
  document.getElementById("custo-pms").value = " ";
  document.getElementById("efeito-habilidade").value = " ";
}
function transferirInputsTabelaParaLista() {
  let listaInputs = [
    document.querySelector("#novo-nome").value,
    document.querySelector("#nova-iniciativa").value,
    document.querySelector("#nova-defesa").value,
    document.querySelector("#novo-pvs").value,
    document.querySelector("#novo-pms").value
  ];
  return listaInputs;
}
function limparInputTabela() {
  document.getElementById("novo-nome").value = " ";
  document.getElementById("nova-iniciativa").value = " ";
  document.getElementById("nova-defesa").value = " ";
  document.getElementById("novo-pvs").value = " ";
  document.getElementById("novo-pms").value = " ";
}
function atualizarTabela(lista) {
  elementoTabela.innerHTML = lista.length == 0 ? " " : NaN;
  let stringEstruturaTabelaHTML = "";
  for (var k = 0; k < lista.length; k++) {
    declaraEstrutura(k);
    for (var i = 0; i < estruturaTabelaHTML.length; i++) {
      stringEstruturaTabelaHTML += estruturaTabelaHTML[i];
    }
    elementoTabela.innerHTML = stringEstruturaTabelaHTML;
  }
}
function atualizarEstado(indexCriatura) {
  let estado = "";
  let vidaAtual = listaCriaturas[indexCriatura].pontosVidaAtuais;
  let vidaMax = listaCriaturas[indexCriatura].pontosVidaCriatura;
  if (vidaAtual < vidaMax) {
    if (vidaAtual <= vidaMax / 2) {
      estado = "Sangrando";
    } else {
      estado = "Ferido";
    }
  } else {
    estado = "Ileso";
  }
  listaCriaturas[indexCriatura].estadoCriatura = estado;
}

function acaoAtacar(i) {}
function acaoHabilidade(i) {}
function derrotarInimigo(i) {
  listaCriaturas.splice(i, 1);
  contadorCriatura--;
  atualizarTabela(listaCriaturas);
}
