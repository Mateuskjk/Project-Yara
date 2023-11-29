// Função para criar uma nova linha da tabela
function createTableRow(viagem) {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${viagem.id}</td>
      <td>${viagem.origem}</td>
      <td>${viagem.destino}</td>
      <td>${viagem.dataIda}</td>
      <td>${viagem.dataVolta}</td>
      <td>${viagem.classViagem}</td>
      <td>${viagem.passageiros}</td>
      <td>${viagem.valorPassagem}</td>
  `;
  return row;
}

// Função para popular a tabela com os dados das viagens
function populateTable() {
  const tableBody = document.getElementById('table');

  fetch('http://localhost:3000/getViagens')
      .then(res => res.json())
      .then((json) => {
        const sortedJson = json.sort((a, b) => b.id - a.id);

        // Limpar a tabela antes de popular
        // tableBody.innerHTML = '';

        console.log('Dados recebidos do servidor:', json);

        // Adicionar as linhas à tabela
        sortedJson.forEach((viagem) => {
          console.log('Adicionando viagem à tabela:', viagem);

          const row = createTableRow(viagem);
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Erro ao obter viagens:', error));
}

// Chamar a função para popular a tabela quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  populateTable();
});

// Recuperar o objeto infoticket do sessionStorage
const infoticketData = sessionStorage.getItem('infoticket');
const infoticket = JSON.parse(infoticketData);

// Verificar se o objeto infoticket foi recuperado corretamente
if (infoticket) {
  // Dados de infoticket
  const { toName, fromName, dateIdaName, dateVoltaName, classeName, passName, passagem } = infoticket;

  // Construir o corpo da solicitação POST
  const requestBody = {
      toName: toName,
      fromName: fromName,
      dateIdaName: dateIdaName,
      dateVoltaName: dateVoltaName,
      classeName: classeName,
      passName: passName,
      passagem: passagem
  };

  // Realizar a solicitação POST usando fetch
  fetch('http://localhost:3000/postViagem', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data); // Se desejar, exiba a resposta do servidor no console
      // Redirecionar ou realizar outras ações conforme necessário
  })
  .catch(error => console.error('Erro ao enviar para o servidor:', error));
} else {
  console.error('Objeto infoticket não encontrado no sessionStorage.');
}
