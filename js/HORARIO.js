function Horario() {
  var hora = new Date().getHours();
  var Image = document.querySelector("img");
  var fundo = document.getElementById("fundo");

  if (hora < 12) {
    document.getElementById("Time").innerHTML = "Bom dia!";
    Image.src = "IMAGENS/sol.png";
    fundo.style.backgroundColor = "#ff9100";
  } else if (hora < 18) {
    document.getElementById("Time").innerHTML = "Boa tarde!";
    Image.src = "IMAGENS/por-do-sol.png";
    fundo.style.backgroundColor = "#ffc578";
  } else {
    document.getElementById("Time").innerHTML = "Boa noite!";
    Image.src = "IMAGENS/lua.png";
  }
}

Horario();
