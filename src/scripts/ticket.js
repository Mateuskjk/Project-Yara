// Verifique se há dados no localStorage
if (localStorage.getItem('pesquisaInfo')) {
  // Recupere a string JSON dos dados do localStorage
  const pesquisaInfoJSON = localStorage.getItem('pesquisaInfo');
  
  // Converta a string JSON de volta para um objeto
  const pesquisaInfo = JSON.parse(pesquisaInfoJSON);

  //recupera os dados do input salvos no localStorage e sobre escreve os elementos no HTML.
  const h2Origem = document.getElementById('origem'); 
  h2Origem.textContent = pesquisaInfo.fromName;

  const h2Origem2 = document.getElementById('origem2'); 
  h2Origem2.textContent = pesquisaInfo.fromName;

  const h2Origem3 = document.getElementById('origem3'); 
  h2Origem3.textContent = pesquisaInfo.fromName;

  const h2Destino = document.getElementById('destino');
  h2Destino.textContent = pesquisaInfo.toName;

  const h2Destino2 = document.getElementById('destino2');
  h2Destino2.textContent = pesquisaInfo.toName;

  const h2Destino3 = document.getElementById('destino3');
  h2Destino3.textContent = pesquisaInfo.toName;

  
  function converterFormatoData(dataString) {
    // Divida a string em partes usando o delimitador "-"
    var partes = dataString.split("-");

    // Reorganize as partes para o formato desejado "dd-mm-yyyy"
    var dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];

    return dataFormatada;
  }

  // Exemplo de uso
  var dataDefault = pesquisaInfo.dateIdaName;
  var dataConvert = converterFormatoData(dataDefault);

  // Use a função para converter e exibir a data no formato "dd/mm/yyyy"
  const dataida = document.getElementById('data-ida');
  dataida.innerHTML = dataConvert;

  console.log("Data Original: " + dataDefault);
  console.log("Data Convertida: " + dataConvert);

  var dataOriginal = pesquisaInfo.dateVoltaName;
  var dataConvertida = converterFormatoData(dataOriginal);

  console.log("Data Original: " + dataOriginal);
  console.log("Data Convertida: " + dataConvertida);

  // Use a função para converter e exibir a data no formato "dd/mm/yyyy"
  const datavolta = document.getElementById('data-volta');
  datavolta.innerHTML = dataConvertida;

  //faz uma verificação de a seleção de ida de volta na index é sim ou não
  const dataid = pesquisaInfo.idaEVoltaName

  if(dataid === "-1") {
    var dataOriginal = pesquisaInfo.dateVoltaName;
    var dataConvertida = converterFormatoData(dataOriginal);

    const datavolta = document.getElementById('data-volta')
    datavolta.innerText = "Somente Ida" 
  }
  else{
    const datavolta = document.getElementById('data-volta')
    datavolta.innerText= dataConvertida;
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

  const classes = ["Econômico", "Executiva", "VIP"];

  const classe2 = classes[Math.floor(Math.random() * classes.length)];

  while (classe2 === pesquisaInfo.classeName) {
    classe2 = classes[Math.floor(Math.random() * classes.length)];
  }

  const classeViagem2 = document.getElementById('class2');
  classeViagem2.textContent = classe2;

  const classes3 = ["Econômico", "Executiva", "VIP"];

  const classe3 = classes3[Math.floor(Math.random() * classes3.length)];

  while (classe3 === pesquisaInfo.classeName) {
    classe3 = classes3[Math.floor(Math.random() * classes3.length)];
  }

  const classeViagem3 = document.getElementById('class3');
  classeViagem3.textContent = classe3;


  const h2Passageiro = document.getElementById('qtd-pass');
  h2Passageiro.textContent = pesquisaInfo.passName + " - Passageiro";

  const h2Passageiro2 = document.getElementById('qtd-pass2');
  h2Passageiro2.textContent = pesquisaInfo.passName + " - Passageiro";

  const h2Passageiro3 = document.getElementById('qtd-pass3');
  h2Passageiro3.textContent = pesquisaInfo.passName + " - Passageiro";

  function gerarValorAleatorioComDuasCasasDecimais() {
    const valorAleatorio = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    const valorFormatado = valorAleatorio.toFixed(2);
  
    return "R$" + valorFormatado;
  }
  
  function preencherCampoEAtualizar(valor, elemento) {
    elemento.textContent = valor;
  }

  // Gerar e preencher valor para o campo principal
  const inputPassagem = document.querySelector("#valor-passagem");
  const passagem = gerarValorAleatorioComDuasCasasDecimais();
  preencherCampoEAtualizar(passagem, inputPassagem);
  passagem.innerText = passagem;

  // Gerar e preencher valor para o campo principal
  const inputPassagem2 = document.querySelector("#valor-passCard2");
  const passagem2 = gerarValorAleatorioComDuasCasasDecimais();
  preencherCampoEAtualizar(passagem2, inputPassagem2);
  passagem2.innerText = passagem2;

  // Gerar e preencher valor para o campo principal
  const inputPassagem3 = document.querySelector("#valor-passCard3");
  const passagem3 = gerarValorAleatorioComDuasCasasDecimais();
  preencherCampoEAtualizar(passagem3, inputPassagem3);
  passagem3.innerText = passagem3;

  document.getElementById('btn1').addEventListener('click', handleClick)

  // No seu arquivo ticket.js
  function handleClick(event) {
    const storedData = localStorage.getItem('pesquisaInfo');
    const storedObject = JSON.parse(storedData) || {};

    storedObject.botao = event.target.innerText;
    storedObject.dataAtivo = event.target.getAttribute('data-ativo');
    storedObject.passagem = passagem;

    storedObject.fromName = pesquisaInfo.fromName;
    storedObject.toName = pesquisaInfo.toName;
    storedObject.dateIdaName = pesquisaInfo.dateIdaName;
    storedObject.dateVoltaName = pesquisaInfo.dateVoltaName;
    storedObject.idaEVoltaName = pesquisaInfo.idaEVoltaName;
    storedObject.classeName = pesquisaInfo.classeName;
    storedObject.passName = pesquisaInfo.passName;

    localStorage.setItem('pesquisaInfo', JSON.stringify(storedObject));
    window.location.href = 'payment.html';
  }

  document.getElementById('btn2').addEventListener('click', handleClick2)

  function handleClick2(event) {
    const storedData = localStorage.getItem('pesquisaInfo');
    const storedObject = JSON.parse(storedData) || {};

    storedObject.botao = event.target.innerText;
    storedObject.dataAtivo = event.target.getAttribute('data-ativo');
    storedObject.passagem = passagem2; // Use o valor de passagem2

    storedObject.fromName = pesquisaInfo.fromName;
    storedObject.toName = pesquisaInfo.toName;
    storedObject.dateIdaName = pesquisaInfo.dateIdaName;
    storedObject.dateVoltaName = pesquisaInfo.dateVoltaName;
    storedObject.idaEVoltaName = pesquisaInfo.idaEVoltaName;
    storedObject.classeName = pesquisaInfo.classeName;
    storedObject.passName = pesquisaInfo.passName;

    localStorage.setItem('pesquisaInfo', JSON.stringify(storedObject));
    window.location.href = 'payment.html';
  }

  document.getElementById('btn3').addEventListener('click', handleClick3)
  

  function handleClick3(event) {
    const storedData = localStorage.getItem('pesquisaInfo');
    const storedObject = JSON.parse(storedData) || {};

    storedObject.botao = event.target.innerText;
    storedObject.dataAtivo = event.target.getAttribute('data-ativo');
    storedObject.passagem = passagem3; // Use o valor de passagem3

    storedObject.fromName = pesquisaInfo.fromName;
    storedObject.toName = pesquisaInfo.toName;
    storedObject.dateIdaName = pesquisaInfo.dateIdaName;
    storedObject.dateVoltaName = pesquisaInfo.dateVoltaName;
    storedObject.idaEVoltaName = pesquisaInfo.idaEVoltaName;
    storedObject.classeName = pesquisaInfo.classeName;
    storedObject.passName = pesquisaInfo.passName;

    localStorage.setItem('pesquisaInfo', JSON.stringify(storedObject));
    window.location.href = 'payment.html';
  }

  
  // Gerar e preencher valores para os cards
  function gerarValoresAleatoriosParaTresCards() {
    const valores = [];
    for (let i = 0; i < 3; i++) {
      valores.push(gerarValorAleatorioComDuasCasasDecimais());
    }
    return valores;
  }
  
  const valoresAleatorios = gerarValoresAleatoriosParaTresCards();
  
  const cards = document.querySelectorAll(".card");
  
  for (let i = 0; i < cards.length; i++) {
    preencherCampoEAtualizar(valoresAleatorios[i], cards[i]);
  }
}

