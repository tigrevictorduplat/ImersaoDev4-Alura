function Converter() {
    var destinoEscolhido = document.getElementById("destino").value;
    var distanciaQuilometros;
    var valorEscolhido = parseFloat(
      document.getElementById("valor-escolhido").value
    );
    switch (destinoEscolhido) {
      case "Lua":
        distanciaQuilometros = 3.844 * Math.pow(10, 5);
        break;
      case "Venus":
        distanciaQuilometros = 1.0816 * Math.pow(10, 8);
        break;
      case "Marte":
        distanciaQuilometros = 7 * Math.pow(10, 7);
        break;
      case "Mercurio":
        distanciaQuilometros = 5.791 * Math.pow(10, 7);
        break;
      case "Sol":
        distanciaQuilometros = 1.496 * Math.pow(10, 8);
        break;
      case "Trappist-1":
        distanciaQuilometros = 3.7337 * Math.pow(10, 15);
        break;
      case "Plutao":
        distanciaQuilometros = 4.8 * Math.pow(10, 9);
        break;
      default:
        distanciaQuilometros = valorEscolhido;
        break;
    }
    var elementoResultado = document.getElementById("valorConvertido");
    var resultadoFixado = distanciaQuilometros / (9.461 * Math.pow(10, 12));
    console.log(distanciaQuilometros);
    console.log(resultadoFixado);
    console.log(Math.pow(10, 12));
    var valorConvertido = "O resultado é " + resultadoFixado + " anos-luz";
    elementoResultado.innerHTML = valorConvertido;
  }
  