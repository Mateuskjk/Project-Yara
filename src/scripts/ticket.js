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

  // Use a função para converter e exibir a data no formato "dd/mm/yyyy"
  const h2DateIda = document.getElementById('data-ida');
  h2DateIda.textContent = converterDataYMDParaDMY(dataIdaYMD);

  // Suponha que pesquisaInfo.dateVoltaName contenha a data de volta no formato "yyyy-mm-dd"
  const dataVoltaYMD = pesquisaInfo.dateVoltaName;

  // Use a função para converter e exibir a data no formato "dd/mm/yyyy"
  const datavolta = document.getElementById('data-volta');
  datavolta.textContent = converterDataYMDParaDMY(dataVoltaYMD);


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
  
  document.getElementById('btn1').addEventListener('click', handleClick);

  function handleClick(event) {
      // Recupera os dados do localStorage
      const storedData = localStorage.getItem('pesquisaInfo');
  
      // Verifica se os dados são uma string JSON válida
      const storedObject = JSON.parse(storedData) || {};
  
      // const inputPassagem = document.getElementById('valor-passagem');
      // const passagem = inputPassagem.value; // Acessar a propriedade 'value'

      // Gerar e preencher valor para o campo principal
      const inputPassagem = document.querySelector("#valor-passagem");
      const passagem = gerarValorAleatorioComDuasCasasDecimais();
      preencherCampoEAtualizar(passagem, inputPassagem);
      
      // Adiciona novas propriedades ao objeto
      storedObject.botao = event.target.innerText;
      storedObject.dataAtivo = event.target.getAttribute('data-ativo');
      storedObject.passagem = passagem; // Atribui o valor, não o elemento
      
      // Adiciona propriedades da pesquisaInfo
      storedObject.fromName = pesquisaInfo.fromName;
      storedObject.toName = pesquisaInfo.toName;
      storedObject.dateIdaName = pesquisaInfo.dateIdaName;
      storedObject.dateVoltaName = pesquisaInfo.dateVoltaName;
      storedObject.idaEVoltaName = pesquisaInfo.idaEVoltaName;
      storedObject.classeName = pesquisaInfo.classeName;
      storedObject.passName = pesquisaInfo.passName;
      
      // Salva o objeto atualizado de volta no localStorage
      localStorage.setItem('pesquisaInfo', JSON.stringify(storedObject));
      
      window.location.href = 'payment.html';
  }

  document.getElementById('btn2').addEventListener('click', handleClick2);

  function handleClick2(event) {
      // Recupera os dados do localStorage
      const storedData = localStorage.getItem('pesquisaInfo');
  
      // Verifica se os dados são uma string JSON válida
      const storedObject = JSON.parse(storedData) || {};
  
      // const inputPassagem = document.getElementById('valor-passagem');
      // const passagem = inputPassagem.value; // Acessar a propriedade 'value'

      const inputPassagem = document.querySelector("#valor-passagem-card2");
      const passagem = gerarValorAleatorioComDuasCasasDecimais();
      preencherCampoEAtualizar(passagem, inputPassagem);
      
      // Adiciona novas propriedades ao objeto
      storedObject.botao = event.target.innerText;
      storedObject.dataAtivo = event.target.getAttribute('data-ativo');
      storedObject.passagem = passagem; // Atribui o valor, não o elemento
      
      // Adiciona propriedades da pesquisaInfo
      storedObject.fromName = pesquisaInfo.fromName;
      storedObject.toName = pesquisaInfo.toName;
      storedObject.dateIdaName = pesquisaInfo.dateIdaName;
      storedObject.dateVoltaName = pesquisaInfo.dateVoltaName;
      storedObject.idaEVoltaName = pesquisaInfo.idaEVoltaName;
      storedObject.classeName = pesquisaInfo.classeName;
      storedObject.passName = pesquisaInfo.passName;
      
      // Salva o objeto atualizado de volta no localStorage
      localStorage.setItem('pesquisaInfo', JSON.stringify(storedObject));
      
      window.location.href = 'payment.html';
  }

  document.getElementById('btn3').addEventListener('click', handleClick3);

  function handleClick3(event) {
      // Recupera os dados do localStorage
      const storedData = localStorage.getItem('pesquisaInfo');
  
      // Verifica se os dados são uma string JSON válida
      const storedObject = JSON.parse(storedData) || {};
  
      // const inputPassagem = document.getElementById('valor-passagem');
      // const passagem = inputPassagem.value; // Acessar a propriedade 'value'

      const inputPassagem = document.querySelector("#valor-passagem-card3");
      const passagem = gerarValorAleatorioComDuasCasasDecimais();
      preencherCampoEAtualizar(passagem, inputPassagem);
      
      // Adiciona novas propriedades ao objeto
      storedObject.botao = event.target.innerText;
      storedObject.dataAtivo = event.target.getAttribute('data-ativo');
      storedObject.passagem = passagem; // Atribui o valor, não o elemento
      
      // Adiciona propriedades da pesquisaInfo
      storedObject.fromName = pesquisaInfo.fromName;
      storedObject.toName = pesquisaInfo.toName;
      storedObject.dateIdaName = pesquisaInfo.dateIdaName;
      storedObject.dateVoltaName = pesquisaInfo.dateVoltaName;
      storedObject.idaEVoltaName = pesquisaInfo.idaEVoltaName;
      storedObject.classeName = pesquisaInfo.classeName;
      storedObject.passName = pesquisaInfo.passName;
      
      // Salva o objeto atualizado de volta no localStorage
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

