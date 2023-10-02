function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.querySelector("input#txtano");
  let res = document.querySelector("div#res");
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let fSex = document.querySelectorAll('input[type="radio"]');
    let idade = ano - Number(fAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 4) {
        // bebe
        img.setAttribute("src", "./img/bebe-m.png");
      } else if (idade >= 4 && idade < 15) {
        // criança
        img.setAttribute("src", "./img/crianca-m.png");
      } else if (idade >= 15 && idade < 25) {
        // jovem
        img.setAttribute("src", "./img/jovem-m.png");
      } else if (idade > 25 && idade < 50) {
        // adulto
        img.setAttribute("src", "./img/adulto-m.png");
      } else if (idade >= 50 && idade <= 110) {
        // idoso
        img.setAttribute("src", "./img/idoso-m.png");
      } else if (idade > 110) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
      }
    } else if (fSex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 4) {
        // bebe
        img.setAttribute("src", "./img/bebe-f.png");
      } else if (idade >= 4 && idade < 15) {
        // criança
        img.setAttribute("src", "./img/crianca-f.png");
      } else if (idade >= 15 && idade < 25) {
        // jovem
        img.setAttribute("src", "./img/jovem-f.png");
      } else if (idade > 25 && idade < 50) {
        // adulto
        img.setAttribute("src", "./img/adulto-f.png");
      } else if (idade >= 50 && idade <= 110) {
        // idoso
        img.setAttribute("src", "./img/idoso-f.png");
      } else if (idade > 110) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
