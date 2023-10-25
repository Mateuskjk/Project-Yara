// Captura valores dos inputs
const btnLogin = document.querySelector("#enviar");

btnLogin.addEventListener("click", function(e){
  e.preventDefault();

  const inputUserName = document.querySelector("#tagName");
  const inputPassUser = document.querySelector("#pass");

  const userName = inputUserName.value;
  const passUser = inputPassUser.value;

// Transforma em um Objeto JS
  const loginUser = {
    userName,
    passUser
  };

// Transforma em uma string para JSON
  const arqLogin = JSON.stringify(loginUser)
	console.log(arqLogin)

// Coloco o meu objeto no localStorage
  localStorage.setItem('loginUser', arqLogin);

// Faço um GET nos meus usuarios cadastrados
  fetch('http://localhost:3000/usuarios')
  .then((res) => res.json())
  .then((jsonArray) => {
    const data = localStorage.getItem('loginUser');
    let foundMatch = false;

// Verifico sem tem os dados salvos no meu localstorage
    if (data) {
      // Converto a string recebida no GET para um objeto JS
      const usersObject = JSON.parse(data);

      // Iterar pelos objetos no array da resposta da solicitação fetch
      for (const json of jsonArray) {
        if (usersObject.userName == json.email && usersObject.passUser == json.senha) {
          foundMatch = true;

          document.querySelector('.search-bar').classList.remove('error');
          document.querySelector('.search-bar').classList.remove('error');
          document.querySelector('.search-bar').classList.add('highlight');
          document.querySelector('.search-bar').classList.add('highlight');
          break; 
        }
      }

      if (!foundMatch) {
        // Remove a classe 'highlight' (se já existir) e adiciona uma classe para a borda vermelha escura
        document.querySelector('.search-bar').classList.remove('highlight');
        document.querySelector('.search-bar').classList.remove('highlight');
        document.querySelector('.search-bar').classList.add('error');
        document.querySelector('.search-bar').classList.add('error');

        //alert("Usuário e senha estão Incorretos.")
      }
    } else {
      // Remove a classe 'highlight' (se já existir) e adiciona uma classe para a borda vermelha escura
      document.querySelector('.search-bar').classList.remove('highlight');
      document.querySelector('.search-bar').classList.remove('highlight');
      document.querySelector('.search-bar').classList.add('error');
      document.querySelector('.search-bar').classList.add('error');

      //alert("Nenhum dado de login encontrado.")
    }
  });
})

//Mostra e Esconde a senha do usuário ==========================
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
// ==============================================================