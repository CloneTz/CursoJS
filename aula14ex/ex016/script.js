function contar() {
  let ini = document.querySelector("#txti");
  let fim = document.querySelector("#txtf");
  let passo = document.querySelector("#txtp");
  let res = document.querySelector("#res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
    // alert("[ERRO] Faltam dados!");
  } else {
    res.innerHTML = "Contando: <br> ";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      //Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} , `;
      }
    } else {
      // Contagem Regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} ,`;
      }
    }
    res.innerHTML += ` \u{1F3C1} `;
  }
}
