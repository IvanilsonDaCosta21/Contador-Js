let num = document.getElementById("fnum");
let flista = document.querySelector("select#flista");
let res = document.getElementById("res");
let valores = [];

function isnumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inlista(n, l) {
  if (l.indexof(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isnumero(num.value) && !inlista(num.value)) {
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }
}
