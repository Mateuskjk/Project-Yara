
const btnAccount = document.querySelector('#send');

btnAccount.addEventListener('click', function(e){
    e.preventDefault();

    const inputFirstName = document.querySelector('#nome');
    const inputLastName = document.querySelector('#s-nome');
    const inputEmail = document.querySelector('#email');
    const inputConfEmail = document.querySelector('#c-email');
    const inputSenha = document.querySelector('#passWrd');
    const inputConfSenha =document.querySelector('#c-passWrd');


    const fisrtName = inputFirstName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;
    const confEmail = inputConfEmail.value;
    const senha = inputSenha.value;
    const confSenha = inputConfSenha.value;

    const registerUser = {
        fisrtName,
        lastName,
        email,
        confEmail,
        senha,
        confSenha
    };

    const arqRegister = JSON.stringify(registerUser)
	console.log(arqRegister)

    // console.log(fisrtName)
    // console.log(lastName)
    // console.log(email)
    // console.log(confEmail)
    // console.log(senha)
    // console.log(confSenha)
})




/*email, c-email, passWrd, c-passWrd*/