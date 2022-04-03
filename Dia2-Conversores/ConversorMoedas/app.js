function Converter() {
    const parMoedaEscolhido = document.getElementById("par-moeda").value;
    var moedaHoje;
    var cifraMoeda;
    switch (parMoedaEscolhido) {
      case "RS-US":
        moedaHoje = 0.2;
        cifraMoeda = "U$";
        break;
      case "US-RS":
        moedaHoje = 5.0;
        cifraMoeda = "R$";
        break;
      case "RS-EU":
        moedaHoje = 0.18;
        cifraMoeda = "EU$";
        break;
      case "EU-US":
        moedaHoje = 1.11;
        cifraMoeda = "U$";
        break;
      case "RS-KW":
        moedaHoje = 94.98;
        cifraMoeda = "KW$";
        break;
      //Desafio #4
      case "RS-BTC":
        moedaHoje = 0.0000047;
        cifraMoeda = "BTC";
        break;
      default:
        alert("Par-Moeda Inexistente");
        break;
    }
  
    var valorEscolhido = parseFloat(
      document.getElementById("valor-escolhido").value
    );
    var elementoResultado = document.getElementById("valorConvertido");
    var dataHoje = "09/03/2022";
    var resultadoFixado = valorEscolhido * moedaHoje;
    var valorConvertido;
    if (cifraMoeda == "BTC") {
      valorConvertido =
        "O resultado é " + cifraMoeda + resultadoFixado + " em " + dataHoje;
    } else {
      valorConvertido =
        "O resultado é " +
        cifraMoeda +
        resultadoFixado.toFixed(2) +
        " em " +
        dataHoje;
    }
    elementoResultado.innerHTML = valorConvertido;
  }
  