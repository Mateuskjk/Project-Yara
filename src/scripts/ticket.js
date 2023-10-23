// Verifique se há dados no localStorage
if (localStorage.getItem('pesquisaInfo')) {
  // Recupere a string JSON dos dados do localStorage
  const pesquisaInfoJSON = localStorage.getItem('pesquisaInfo');
  
  // Converta a string JSON de volta para um objeto
  const pesquisaInfo = JSON.parse(pesquisaInfoJSON);

  // Use os dados como necessário
  console.log(pesquisaInfo.toName);
} else {
  console.log("Nenhum dado encontrado.");
}