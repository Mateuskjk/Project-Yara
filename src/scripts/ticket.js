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

  const h2DateIda = document.getElementById('data-ida');
  h2DateIda.textContent = pesquisaInfo.dateIdaName;

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
  else{
    const classeViagem = document.getElementById('class');
    classeViagem.textContent = "Executiva";
  }

  const h2Passageiro = document.getElementById('qtd-pass');
  h2Passageiro.textContent = pesquisaInfo.passName;

} else {
  console.log("Nenhum dado encontrado.");
}

function gerarValorAleatorioComDuasCasasDecimais() {
  const valorAleatorio = Math.random() * 300; 
  const valorFormatado = valorAleatorio.toFixed(2);
  return "R$" + valorFormatado; 
}

document.getElementById("valor-passagem").textContent = gerarValorAleatorioComDuasCasasDecimais();
