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