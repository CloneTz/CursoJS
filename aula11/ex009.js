function identificar() {
  let country = document.querySelector("#country").value;
  let nation = document.querySelector("#res");
  let nationality = "Brasil";

  if (country === nationality) {
    nation.innerHTML = `Vivendo em ${country}, você é <strong>Brasileiro</strong>!`;
  } else {
    nation.innerHTML = `Vivendo em ${country}, você é <strong>estrangeiro!</strong>`;
  }
}
