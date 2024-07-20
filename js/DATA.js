function Data() {
  var data = new Date().getDate();
  var mes = new Date().getMonth() + 1; // +1 para converter de zero-based index para um base-1 index
  var ano = new Date().getFullYear();

  document.getElementById("Date").innerHTML = data + "/" + mes + "/" + ano;
}

Data();
