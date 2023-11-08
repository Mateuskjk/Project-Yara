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

