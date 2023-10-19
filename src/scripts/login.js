// Captura valores dos inputs
const btnLogin = document.querySelector("#enviar");

btnLogin.addEventListener("click", function(e){
  e.preventDefault();

  const inputUserName = document.querySelector("#tagName");
  const inputPassUser = document.querySelector("#pass");

  const userName = inputUserName.value;
  const passUser = inputPassUser.value;

  // console.log(userName)
  // console.log(passUser)
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









//=================================================================================================
