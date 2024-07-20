const HorasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

function newTime() {
  const date = new Date();

  const Horas = date.getHours();

  const Minutos = date.getMinutes();

  const Segundos = date.getSeconds();

  HorasElement.textContent = fixTime(Horas);
  minutosElement.textContent = fixTime(Minutos);
  segundosElement.textContent = fixTime(Segundos);
}

function fixTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

newTime();
setInterval(newTime, 1);
