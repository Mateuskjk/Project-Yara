const btnAccount = document.querySelector('#send');

btnAccount.addEventListener('click', function (e) {
  e.preventDefault();

  const inputFirstName = document.querySelector('#nome');
  const inputLastName = document.querySelector('#s-nome');
  const inputEmail = document.querySelector('#email');
  const inputConfEmail = document.querySelector('#c-email');
  const inputSenha = document.querySelector('#passWrd');
  const inputConfSenha = document.querySelector('#c-passWrd');

  const nome = inputFirstName.value;
  const sobrenome = inputLastName.value;
  const email = inputEmail.value;
  const confEmail = inputConfEmail.value;
  const senha = inputSenha.value;
  const confSenha = inputConfSenha.value;

  const registerUser = {
    nome,
    sobrenome,
    email,
    confEmail,
    senha,
    confSenha
  };

  const arqRegister = JSON.stringify(registerUser);
  localStorage.setItem('registerUser', arqRegister);

  window.location.href = "login.html"

  // Realize a solicitação POST para o servidor Node.js
  fetch('http://localhost:3000/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerUser)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação. Status: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  
});