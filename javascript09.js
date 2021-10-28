// Funcao para Calcular a Velocidade
function calcular() {
  var txtv = window.document.querySelector("input#txtvel");
  var res = window.document.querySelector("div#res");
  var vel = Number(txtv.value);
  res.innerHTML = `<p class="prim_p">Sua Velocidade atual é de <strong> ${vel} km/h</strong></p>`;

  if (vel > 60) {
    res.innerHTML += "Você está <strong>multado</strong> por excesso de velocidade";
  } else {
    res.innerHTML += `<p class="seg_p">Diriga sempre com cinto de segurança</p>`;
  }
}
