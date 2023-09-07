function identificar() {
  let contry = document.querySelector("#contry").value;
  let nation = document.querySelector("#res");
  let nationality = (document.querySelector("#contry").value = "Brasil");

  if (contry == nationality) {
    nation.innerHTML = `Vivendo em ${contry}, você é <strong>Brasileiro</strong>!`;
  } else {
    nation.innerHTML = `Vivendo em ${contry}, você é <strong>estrangeiro!</strong>`;
  }
}
