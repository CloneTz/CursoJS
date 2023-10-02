function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.png";
    document.body.style.background = "#FBC094";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.png";
    document.body.style.background = "#FFEDAE";
  } else {
    img.src = "noite.png";
    document.body.style.background = "#03161C";
  }
}
