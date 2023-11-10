import { moment } from "./api/node_modules/moment";


const creditCardRadio = document.getElementById('credit-card');
const pixRadio = document.getElementById('pix');

const cardNumberInput = document.getElementById('card-number');
const cardNameInput = document.getElementById('card-name');
const expirationDateInput = document.getElementById('expiration-date');
const cvvInput = document.getElementById('cvv');
const selectParcelas = document.getElementById('parcelas');
const CPFInput = document.getElementById('cpf');
const DateNascimentoInput = document.getElementById('birthdate');

function habilitarDesabilitarCampos() {
  const estaPix = pixRadio.checked;

  cardNumberInput.disabled = estaPix;
  cardNameInput.disabled = estaPix;
  expirationDateInput.disabled = estaPix;
  cvvInput.disabled = estaPix;
  selectParcelas.disabled = estaPix;
  CPFInput.disabled = estaPix;
  DateNascimentoInput.disabled = estaPix;
}

creditCardRadio.addEventListener('change', habilitarDesabilitarCampos);
pixRadio.addEventListener('change', habilitarDesabilitarCampos);

// Chame a função para configurar o estado inicial com base na opção selecionada
habilitarDesabilitarCampos();



/*=============================================== */
document.querySelector('form').addEventListener('submit', function (e) {
  if (document.querySelector('.btn-form').disabled) {
    e.preventDefault(); 
  }
});

function copyCode(e) {

  const codeInput = document.querySelector('.key-code');
  codeInput.select();
  document.execCommand('copy');

 
  const copyIndicator = document.getElementById('copyIndicator');
  copyIndicator.style.display = 'inline';
  setTimeout(() => {
    copyIndicator.style.display = 'none';
  }, 8000);
  e.preventDefault(); 
}

function habilitarDesabilitarBotao(e) {
  const metodoDePagamento = document.querySelector('input[name="payment-method"]:checked');
  const botaoCartao = document.querySelector('.btn-form');

  if (metodoDePagamento.value === 'pix') {
    botaoCartao.disabled = true; 
    e.preventDefault(); 
  } else {
    botaoCartao.disabled = false; 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Função para gerar um número aleatório no formato "1234-5678-9012-3456"
  function gerarValorAleatorio() {
    let novoNumero = '';
    for (let i = 0; i < 16; i++) {
      novoNumero += gerarDigito();
      if (i % 4 === 3 && i !== 15) {
        novoNumero += '-';
      }
    }
    return novoNumero;
  }

  // Função para gerar um dígito aleatório de 0 a 9
  function gerarDigito() {
    return Math.floor(Math.random() * 10).toString();
  }

  // Elemento de entrada que você deseja sobrescrever
  const numeroCartao = document.getElementById('keyCode');

  // Sobrescrever o valor do elemento de entrada com um número aleatório
  numeroCartao.value = gerarValorAleatorio();
});


const pixRadioScroll = document.getElementById('pix');

pixRadio.addEventListener('change', function() {
  const pixForm = document.getElementById('pix-card-container');
  window.scrollTo(0, pixForm.offsetTop);
});


// Prevenir o envio do formulário
// document.getElementsByClassName("btn-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Impede o envio do formulário
// });

// Validar o número do cartão de crédito
function isValidCreditCard(cardNumber) {
  // Expressão regular para validar números de cartão de crédito
  var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;

  if (!/^\d*$/.test(cardNumber)) {
    return false;
  }
  
  if (!regex.test(cardNumber)) {
    return false;
  }

  // Algoritmo de Luhn (verificação do dígito de verificação)
  var sum = 0;
  var doubleUp = false;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var digit = parseInt(cardNumber.charAt(i), 10);
    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    doubleUp = !doubleUp;
  }

  return (sum % 10 === 0);
}

// Validar a data de validade
function isValidExpirationDate(expirationDate) {
  // Formato MM/YY
  var regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  if (parts[0] < 1 || parts[0] > 12) {
    return false;
  }

  if (parts[1] < 0 || parts[1] > 99) {
    return false;
  }
  
  if (!regex.test(expirationDate)) {
    return false;
  }

  // Data atual
  var today = new Date();
  var currentMonth = today.getMonth() + 1; // O mês atual é baseado em zero
  var currentYear = today.getFullYear() % 100; // Apenas os dois últimos dígitos do ano

  // Dividir a data de validade
  var parts = expirationDate.split('/');
  var inputMonth = parseInt(parts[0], 10);
  var inputYear = parseInt(parts[1], 10);

  // Data expirada
  if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
    return false;
  }

  // Mês válido
  if (inputMonth < 1 || inputMonth > 12) {
    return false;
  }

  // Ano válido
  if (inputYear < 0 || inputYear > 99) {
    return false;
  }

  return true;
}

if (localStorage.getItem('pesquisaInfo')) {
  const pesquisaInfoJSON = localStorage.getItem('pesquisaInfo');
  const pesquisaInfo = JSON.parse(pesquisaInfoJSON);

  const h3Origem = document.getElementById('origem'); 
  h3Origem.textContent = pesquisaInfo.fromName;

  const h3Destino = document.getElementById('destino');
  h3Destino.textContent = pesquisaInfo.toName;

  function converterDataYMDParaDMY(dataYMD) {
    return moment(dataYMD).format("DD/MM/YYYY");
  }

// Suponha que pesquisaInfo.dateIdaName contenha a data de ida no formato "yyyy-mm-dd"
  const dataIdaYMD = pesquisaInfo.dateIdaName;

// Use o Moment.js para converter e exibir a data no formato "dd/mm/yyyy"
  const h2DateIda = document.getElementById('data-ida');
  h2DateIda.textContent = converterDataYMDParaDMY(dataIdaYMD);

// Imprima o valor da variável na console
  console.log(dataIdaYMD);

// Suponha que pesquisaInfo.dateVoltaName contenha a data de volta no formato "yyyy-mm-dd"
  const dataVoltaYMD = pesquisaInfo.dateVoltaName;

  // Use o Moment.js para converter e exibir a data no formato "dd/mm/yyyy"
  const datavolta = document.getElementById('data-volta');
  datavolta.textContent = converterDataYMDParaDMY(dataVoltaYMD);

// Imprima o valor da variável na console
console.log(dataVoltaYMD);




  const dataid = pesquisaInfo.idaEVoltaName

  if(dataid === "-1") {
    const datavolta = document.getElementById('data-volta')
    datavolta.textContent = "Somente Ida" 
  }
  else{
    const datavolta = document.getElementById('data-volta')
    datavolta.textContent = pesquisaInfo.dateVoltaName;
  }

  const classe = pesquisaInfo.classeName;

  if(classe === "1") {
    const classeViagem = document.getElementById('class');
    classeViagem.textContent = "Econômico" ;
  }
  else {
    const classeViagem = document.getElementById('class');
    classeViagem.textContent = "Executiva";
  }
}

if (localStorage.getItem('valorPassagem')) {
  const valorPassagem = JSON.parse(localStorage.getItem('valorPassagem'));
  const valorPass = document.getElementById('valor-passagem');
  valorPass.textContent = valorPassagem.valor;
  console.log("Meu valor está salvo.");
  console.log(valorPass);
}

