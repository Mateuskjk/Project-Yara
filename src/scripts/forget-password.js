const btnAvançarPass = document.querySelector("#enviar");

btnAvançarPass.addEventListener("click", (e) => {
  e.preventDefault();

  const email = localStorage.getItem("userEmail"); // Get user email from storage
  const novaSenha = document.querySelector("#pass").value;
  const confirmNovaSenha = document.querySelector("#Confpass").value;

  if (novaSenha !== confirmNovaSenha) {
    // If password and confirm password don't match
    document.querySelector('.search-bar').classList.add('error');
    console.error('Senhas não coincidem!');
    return;
  }

  fetch(`http://localhost:3000/usuarios/${email}`)
    .then((res) => res.json())
    .then((userData) => {
      userData.senha = novaSenha;
      userData.confSenha = confirmNovaSenha;

      fetch(`http://localhost:3000/usuarios/${email}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        document.querySelector('.search-bar').classList.add('highlight');
        alert("SENHA ATUALIZADA COM SUCESSO!!!");
        window.location.href = 'login.html';
      }).catch(() => {
        document.querySelector('.search-bar').classList.add('error');
        console.error('Erro ao atualizar a senha');
      });
    });
});
















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
}