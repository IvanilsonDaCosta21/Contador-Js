//Exercicios - Mudar a foto de acordo com idade

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("Verifique os dados e tenta novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";

    //Criei a tag Imagem dinamicamente
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      //Verficar as Idades - Masculino
      if (idade >= 10 && idade < 10) {
        //Crianca
        img.setAttribute("src", "img_persons/bebe_masc.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "img_persons/young_boy.png");
      } else if (idade < 50) {
        //Idoso
        img.setAttribute("src", "img_persons/adult_masc.png");
      } else {
        //Idoso
        img.setAttribute("src", "img_persons/old_man.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      //Verficar as Idades - Feminino
      if (idade >= 10 && idade < 10) {
        //Crianca
        img.setAttribute("src", "img_persons/bebe_fem.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "img_persons/young_girl.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "img_persons/adult_fem.png");
      } else {
        //Idoso
        img.setAttribute("src", "img_persons/old_woman.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `<p class="alinhar">Detetamos<strong> ${genero}</strong> com ${idade} anos</p>`;
    res.appendChild(img);
  }
}
