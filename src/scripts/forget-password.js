function mostrarSenha(){
  var inputPass = document.getElementById('pass')
  var btnShowPass = document.getElementById('btn-senha')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text')
    btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
  } else{
    inputPass.setAttribute('type','password')
    btnShowPass.classList.replace('bi-eye-slash','bi-eye')
  }
}

function mostrarConfSenha(){
  var inputPass = document.getElementById('Confpass')
  var btnShowPass = document.getElementById('btn-Confsenha')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text')
    btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
  } else{
    inputPass.setAttribute('type','password')
    btnShowPass.classList.replace('bi-eye-slash','bi-eye')
  }
};

const btnAvancarPass = document.querySelector("#enviar");

btnAvancarPass.addEventListener("click", async (e) => {
  e.preventDefault();

  // Você já está passando o e-mail através da URL
  const urlParams = new URLSearchParams(window.location.search);
  const emailInURL = urlParams.get('email');
  const emailDecoded = decodeURIComponent(emailInURL);

  if (!emailDecoded) {
    console.error("User email not found in URL");
    return;
  }

  const senha = document.querySelector("#pass").value;
  const confSenha = document.querySelector("#Confpass").value;

  if (!senha || !confSenha) {
    console.error("New passwords not provided");
    return;
  }

  try {
    // Obter o ID do usuário com base no e-mail da URL
    const userId = await getUserIdByEmail(emailDecoded);
    console.log('UserID:', userId);

    if (userId !== null) {
      // Atualizar a senha do usuário no banco de dados usando o método PUT
      const response = await fetch(`http://localhost:3000/usuario/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senha,
          confSenha,
          id: userId,
        }),
      });
    
      if (!response.ok) {
        throw new Error('Erro ao atualizar a senha. Status: ' + response.status);
      }
    
      const data = await response.json();
      console.log(data);

      Window.location.href = 'login.html';
    
      // Lógica de sucesso, redirecionamento, etc.
    } else {
      console.error('Usuário não encontrado com o e-mail fornecido.');
      // Adicione lógica de tratamento para o caso em que o usuário não é encontrado
    }
    
  } catch (err) {
    console.error('Erro durante a atualização de senha:', err);
    // Adicione lógica de tratamento para o caso em que ocorre um erro
  }
});

async function getUserIdByEmail(email) {
  const response = await fetch(`http://localhost:3000/usuarios?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Não foi possível obter o ID do usuário.');
  }

  const userDataArray = await response.json();

  // Verifique se há pelo menos um usuário correspondente
  if (userDataArray.length > 0) {
    // Retorne o ID do usuário correspondente
    return userDataArray.filter((e)=> {
      return e.email === email;
    })[0].id;
  } else {
    // Se nenhum usuário foi encontrado, retorne null
    return null;
  }
}
