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

const btnAvançarPass = document.querySelector("#enviar");

btnAvançarPass.addEventListener("click", (e) => {
  e.preventDefault();

  const emailInStored = localStorage.getItem("userDataEmail");

  if (!emailInStored) {
    console.error("User email not found in local storage");
    return;
  }

  const senha = document.querySelector("#pass").value;
  const confSenha = document.querySelector("#Confpass").value;

  const senhaData = {
    emailUser: emailInStored,
    senha,
    confSenha,
  };

  if (!senhaData) {
    console.error("User new senhas not found in local storage");
    return;
  }

  const setNovasSenhas = JSON.stringify(senhaData);
  localStorage.setItem("senhaData", setNovasSenhas);
  console.log(setNovasSenhas);

  fetch('http://localhost:3000/getUsuarios').then((res) => res.json()).then((jsonArrays) => {
    const emailInDB = localStorage.getItem('userDataEmail'); // Corrigido para usar a chave correta

    if (emailInDB === emailInStored) {
      console.log('emails são iguais');
       
      const senhasFromLocalStorage = localStorage.getItem("senhaData");
       
      if (senhasFromLocalStorage) {
        const senhasObject = JSON.parse(senhasFromLocalStorage);
        console.log(senhasObject)
       
        // Encontrar o usuário com base no e-mail
        const foundUser = jsonArrays.find(user => user.email === emailInStored);
       
        if (!foundUser) {
          const userId = foundUser;
       
          // Atualizar a senha do usuário no banco de dados usando o método PUT
          fetch(`http://localhost:3000/putUsuario/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(senhaData),
          }).then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao atualizar a senha. Status: ' + response.status);
            }
            return response.json();
          }).then((data) => {
            console.log(data);
            alert("SENHA ATUALIZADA COM SUCESSO!!!!");
          }).catch((error) => {
            console.error('ERROR: ', error);
          });
        }else {
          console.error('Usuário não encontrado com o e-mail fornecido.');
          // Adicione lógica de tratamento para o caso em que o usuário não é encontrado
        }
      }
    }
  }).catch((error) => {
    console.error('Erro ao buscar usuários:', error);
    // Adicione lógica de tratamento para o caso em que ocorre um erro ao buscar usuários
  });
});