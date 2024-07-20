function Horario() {
  var hora = new Date().getHours();
  var Image = document.querySelector("img");
  var fundo = document.getElementById("fundo");

  if (hora < 12) {
    document.getElementById("Time").innerHTML = "Bom dia!";
    document.getElementById("Time").style.color = "#ff9900";
    Image.src = "IMAGENS/sol.png";
  } else if (hora < 18) {
    document.getElementById("Time").innerHTML = "Boa tarde!";
    document.getElementById("Time").style.color = "#ffbf5e";
    Image.src = "IMAGENS/por-do-sol.png";
  } else {
    document.getElementById("Time").innerHTML = "Boa noite!";
    document.getElementById("Time").style.color = "#64a7c4";
    Image.src = "IMAGENS/lua.png";
  }
}

Horario();
