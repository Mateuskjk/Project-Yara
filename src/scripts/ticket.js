// Verifique se há dados no localStorage
if (localStorage.getItem('pesquisaInfo')) {
  // Recupere a string JSON dos dados do localStorage
  const pesquisaInfoJSON = localStorage.getItem('pesquisaInfo');
  
  // Converta a string JSON de volta para um objeto
  const pesquisaInfo = JSON.parse(pesquisaInfoJSON);

  //recupera os dados do input salvos no localStorage e sobre escreve os elementos no HTML.
  const h2Origem = document.getElementById('origem'); 
  h2Origem.textContent = pesquisaInfo.fromName;

  const h2Destino = document.getElementById('destino');
  h2Destino.textContent = pesquisaInfo.toName;

  function converterDataYMDParaDMY(dataYMD) {
    const partes = dataYMD.split("-");
    const data = new Date(partes[0], partes[1] - 1, partes[2]); // Mês é baseado em 0 (janeiro é 0)
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Adicione 1 ao mês para corresponder ao formato desejado
    const ano = data.getFullYear();
    return `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano}`;
  }
  
  // Suponha que pesquisaInfo.dateIdaName contenha a data de ida no formato "yyyy-mm-dd"
  const dataIdaYMD = pesquisaInfo.dateIdaName;

  function converterDataYMDParaDMY(dataYMD) {
    const partes = dataYMD.split("-");
    const data = new Date(partes[0], partes[1] - 1, partes[2]); // Mês é baseado em 0 (janeiro é 0)
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Adicione 1 ao mês para corresponder ao formato desejado
    const ano = data.getFullYear();
    return `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano}`;
  }
  
  // Suponha que pesquisaInfo.dateVoltaName contenha a data no formato "yyyy-mm-dd"
  const dataVoltaYMD = pesquisaInfo.dateVoltaName;
  
  // Use a função para converter e exibir a data no formato "dd/mm/yyyy"
  const datavolta = document.getElementById('data-volta');
  datavolta.textContent = converterDataYMDParaDMY(dataVoltaYMD);
  
  // Use a função para converter e exibir a data no formato "dd/mm/yyyy"
  const h2DateIda = document.getElementById('data-ida');
  h2DateIda.textContent = converterDataYMDParaDMY(dataIdaYMD);
  
  //faz uma verificação de a seleção de ida de volta na index é sim ou não
  const dataid = pesquisaInfo.idaEVoltaName

  if(dataid === "-1") {
    const datavolta = document.getElementById('data-volta')
    datavolta.textContent = "Somente Ida" 
  }
  else{
    const datavolta = document.getElementById('data-volta')
    datavolta.textContent = pesquisaInfo.dateVoltaName;
  }

  //faz uma verificação de a seleção de classe na index é executiva ou econômica.
  const classe = pesquisaInfo.classeName;

  if(classe === "1") {
    const classeViagem = document.getElementById('class');
    classeViagem.textContent = "Econômico" ;
  }
  else {
    const classeViagem = document.getElementById('class');
    classeViagem.textContent = "Executiva";
  }

  const h2Passageiro = document.getElementById('qtd-pass');
  h2Passageiro.textContent = pesquisaInfo.passName + " - Passageiro";

  function gerarValorAleatorioComDuasCasasDecimais() {
    const valorAleatorio = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    const valorFormatado = valorAleatorio.toFixed(2);
  
    return "R$" + valorFormatado;
  }
  
  function preencherCampoEAtualizar(valor, elemento) {
    elemento.textContent = valor;
  }
  
  // Gerar e preencher valor para o campo principal
  const inputValue = document.querySelector("#valor-passagem");

  const valorPrincipal = gerarValorAleatorioComDuasCasasDecimais();
  preencherCampoEAtualizar(valorPrincipal, inputValue);

  const inputCard2Value = document.querySelector("#valor-passagem-card2");
  const valorPrincipalCard2 = gerarValorAleatorioComDuasCasasDecimais();
  preencherCampoEAtualizar(valorPrincipalCard2, inputCard2Value);

  const inputCard3Value = document.querySelector("#valor-passagem-card3");
  const valorPrincipalCard3 = gerarValorAleatorioComDuasCasasDecimais();
  preencherCampoEAtualizar(valorPrincipalCard3, inputCard3Value);

  function handleClick(event) {
    const botao = event.target;
    
    // Altera o valor de false para true
    botao.dataset.ativo = 'true';

    // Verifica se algum botão tem o valor true
    if (document.getElementById('btn1').dataset.ativo === 'true' ||
      document.getElementById('btn2').dataset.ativo === 'true' ||
      document.getElementById('btn3').dataset.ativo === 'true') {
        // Adiciona o valor ao objeto valorPassagem
      valorPassagem.btnValue = botao.dataset.ativo;

      // Adiciona os valores restantes
      valorPassagem.valor = valorPrincipal;
      valorPassagem.valor2 = valorPrincipalCard2;
      valorPassagem.valor3 = valorPrincipalCard3;

      console.log(valorPassagem);
    }
  }

  document.getElementById('btn1').addEventListener('click', handleClick);
  document.getElementById('btn2').addEventListener('click', handleClick);
  document.getElementById('btn3').addEventListener('click', handleClick);
  
  const valorPassagem = {
    valor: valorPrincipal,
    valor2: valorPrincipalCard2,
    valor3: valorPrincipalCard3,
    btnValue: null
  };
  
  // Armazenar no LocalStorage
  localStorage.setItem("valorPassagem", JSON.stringify(valorPassagem));
  
  console.log(valorPassagem);
  
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

