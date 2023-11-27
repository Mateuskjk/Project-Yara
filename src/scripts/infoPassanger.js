// Array para armazenar informações dos passageiros
let passageiros = [];

const addInformationPassenger = document.querySelector('#save');

addInformationPassenger.addEventListener('click', (e) => {
    // Obter valores dos inputs
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#s-nome').value;
    const cpf = document.querySelector('#cpf').value;
    const rg = document.querySelector('#rg').value;
    const idade = document.querySelector('#idade').value;
    const email = document.querySelector('#email').value;

    // Criar objeto com as informações
    const passageiro = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        rg: rg,
        idade: idade,
        email: email
    };

    // Adicionar objeto ao array
    passageiros.push(passageiro);

    alert("Informações Salvas de: " + passageiros[passageiros.length - 1].nome);

    // Limpar os campos dos inputs após adicionar as informações
    document.querySelector('#nome').value = '';
    document.querySelector('#s-nome').value = '';
    document.querySelector('#cpf').value = '';
    document.querySelector('#rg').value = '';
    document.querySelector('#idade').value = '';
    document.querySelector('#email').value = '';


    // Exibir o array no console (pode ser removido em produção)
    console.log(passageiros);
});

const sendToDBButton = document.querySelector('#send');

sendToDBButton.addEventListener('click', () => {
    // Supondo que 'passageiros' seja o array que você deseja enviar para o servidor
    fetch('http://localhost:3000/postInformationPassenger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(passageiros),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.statusCode === 200 ? 'Passageiros salvos com sucesso!' : 'Erro ao salvar passageiros.');
        // Limpar o array local se desejar
        passageiros = [];

        window.location.href = 'payment.html'
    })
    .catch(error => console.error('Erro ao enviar para o banco de dados:', error));
});







// const saveInformationPassenger = document.querySelector('#send');

// saveInformationPassenger.addEventListener('click', function (e) {
//   e.preventDefault();

//   const namePassenger = document.querySelector('#nome');
//   const lastNamePassenger = document.querySelector('#s-nome');
//   const cpfPassenger = document.querySelector('#cpf');
//   const rgPassenger = document.querySelector('#rg');
//   const agePassenger = document.querySelector('#idade');
//   const emailPassenger = document.querySelector('#email');

//   const nome = namePassenger.value;
//   const sobrenome = lastNamePassenger.value;
//   const cpf = cpfPassenger.value;
//   const rg = rgPassenger.value;
//   const idade = agePassenger.value;
//   const email = emailPassenger.value;

//   const passengerInformation = {
//     nome,
//     sobrenome,
//     cpf,
//     rg,
//     idade,
//     email
//   };

//   const archivePassenger = JSON.stringify(passengerInformation);
//   localStorage.setItem('passengerInformation', archivePassenger);

//   window.location.href = "login.html"

//   // Realize a solicitação POST para o servidor Node.js
//   fetch('http://localhost:3000/usuario', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(registerUser)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Erro na solicitação. Status: ' + response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Erro:', error);
//     });
  
// });
