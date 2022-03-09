function Converter() {
    var parTemperaturaEscolhido = document.getElementById("par-temp").value;
    var valorEscolhido = parseFloat(
      document.getElementById("valor-escolhido").value
    );
    var cifraTemp;
    var calculoTemperatura;
    switch (parTemperaturaEscolhido) {
      case "C-F":
        calculoTemperatura = (valorEscolhido * 9) / 5 + 32;
        cifraTemp = "F°";
        break;
      case "F-C":
        calculoTemperatura = (valorEscolhido - 32) * (5 / 9);
        cifraTemp = "C°";
        break;
      case "C-K":
        calculoTemperatura = valorEscolhido + 273.15;
        cifraTemp = "K";
        break;
      case "K-C":
        calculoTemperatura = valorEscolhido - 273.15;
        cifraTemp = "C°";
        break;
      case "F-K":
        calculoTemperatura = (5 / 9) * (valorEscolhido - 32) + 273.15;
        cifraTemp = "K";
        break;
      default:
        alert("Par-Temperatura Inexistente");
        break;
    }
    var elementoResultado = document.getElementById("valorConvertido");
    var valorConvertido =
      "O resultado é " + calculoTemperatura.toFixed(2) + cifraTemp;
    elementoResultado.innerHTML = valorConvertido;
  }
  