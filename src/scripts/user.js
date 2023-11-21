fetch('http://localhost:3000/getViagens')
  .then(res => res.json())
  .then((json) => {
    // Ordenar o array pelo ID de forma decrescente
    const sortedJson = json.sort((a, b) => b.id - a.id);

    console.log(sortedJson);

    const tableBody = document.getElementById('table'); // Obter o elemento do corpo da tabela

    sortedJson.forEach((viagem) => {
      const row = document.createElement('tr'); // Criar uma nova linha da tabela
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
      tableBody.appendChild(row); // Adicionar a linha ao corpo da tabela
    });
  });


