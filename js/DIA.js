function Dia() {
  var dia = new Date().getDay();

  switch (dia) {
    case 0:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Domingo";
      break;
    case 1:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Segunda";
      break;
    case 2:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Terça";
      break;
    case 3:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Quarta";
      break;
    case 4:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Quinta";
      break;
    case 5:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Sexta";
      break;
    case 6:
      // o que acontece
      document.getElementById("Day").innerHTML = "Hoje é Sábado";
      break;
    default:
      // o que acontece
      document.getElementById("Day").innerHTML = "Não sei que dia é... ";
  }
}

Dia();
