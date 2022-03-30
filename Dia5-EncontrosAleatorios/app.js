var baseCriatura = {
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
    }
  };
  var listaCriaturas = [{ ...baseCriatura }];
  var estruturaTabelaHTML = [];
  var contadorCriatura = 0;
  const elementoTabela = document.getElementById("tabelaEncontros");
  const elementoDialog = document.getElementById("janela-info");
  
  function controlDialog() {
    if (!elementoDialog.open) {
      elementoDialog.showModal();
    } else {
      elementoDialog.close();
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
  function adicionarExtrasInput() {
    let listaInputsDg = transferirInputsDialogParaLista();
    limparInputDialog();
    let i = 0;
    let l = contadorCriatura;
    listaCriaturas[l].nivelCriatura = listaInputsDg[i];
    i++;
    listaCriaturas[l].armaCriatura.nomeArma = listaInputsDg[i];
    i++;
    listaCriaturas[l].ataqueCriatura = listaInputsDg[i];
    i++;
    listaCriaturas[l].numDadosDano = listaInputsDg[i];
    i++;
    listaCriaturas[l].armaCriatura.tipoDadosDano = listaInputsDg[i];
    i++;
    listaCriaturas[l].habilidadeCriatura.tituloHabilidade = listaInputsDg[i];
    i++;
    listaCriaturas.habilidadeCriatura.custoMana = listaInputsDg[i];
    i++;
    listaCriaturas.habilidadeCriatura.efeitoHabilidade = listaInputsDg[i];
  }
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
  function adicionarCriatura() {
    if (contadorCriatura != 0) {
      listaCriaturas.push({ ...baseCriatura });
    }
    contadorCriatura++;
    controlDialog();
    let checaDialog = false;
    while (!checaDialog) {
      checaDialog = elementoDialog.open ? true : false;
    }
    adicionarTableInput();
    adicionarExtrasInput();
    atualizarTabela(listaCriaturas);
  }
  
  function acaoAtacar(i) {}
  function acaoHabilidade(i) {}
  function derrotarInimigo(i) {
    listaCriaturas.splice(i, 1);
    contadorCriatura--;
    atualizarTabela(listaCriaturas);
  }
  