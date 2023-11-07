const creditCardRadio = document.getElementById("credit-card");
const pixRadio = document.getElementById("pix");
const cardNumberInput = document.getElementById("card-number");
const cardNameInput = document.getElementById("card-name");
const expirationDateInput = document.getElementById("expiration-date");
const cvvInput = document.getElementById("cvv");
const selectParcelas = document.getElementById("parcelas");
const CPFInput = document.getElementById("cpf");
const DateNascimentoInput = document.getElementById("birthdate");

creditCardRadio.addEventListener("change", function () {
  if (creditCardRadio.value === "pix") {
    cardNumberInput.disabled = true;
    cardNameInput.disabled = true;
    expirationDateInput.disabled = true;
    cvvInput.disabled = true;
    selectParcelas.disabled = true;
    CPFInput.disabled = true;
    DateNascimentoInput.disabled = true;
  } else {
    cardNumberInput.disabled = false;
    cardNameInput.disabled = false;
    expirationDateInput.disabled = false;
    cvvInput.disabled = false;
    selectParcelas.disabled = false;
    CPFInput.disabled = false;
    DateNascimentoInput.disabled = false;
  }
});

pixRadio.addEventListener("change", function () {
  if (pixRadio.value === "pix") {
    cardNumberInput.disabled = true;
    cardNameInput.disabled = true;
    expirationDateInput.disabled = true;
    cvvInput.disabled = true;
    selectParcelas.disabled = true;
    CPFInput.disabled = true;
    DateNascimentoInput.disabled = true;
  } else {
    cardNumberInput.disabled = false;
    cardNameInput.disabled = false;
    expirationDateInput.disabled = false;
    cvvInput.disabled = false;
    selectParcelas.disabled = false;
    CPFInput.disabled = false;
    DateNascimentoInput.disabled = false;
  }
});
/*=============================================== */

function copyCode() {
  const codeInput = document.querySelector('.key-code');
  codeInput.select();
  document.execCommand('copy');
  const copyIndicator = document.getElementById('copyIndicator');
  copyIndicator.style.display = 'inline';
  setTimeout(() => {
    copyIndicator.style.display = 'none';
  }, 2000);
}
