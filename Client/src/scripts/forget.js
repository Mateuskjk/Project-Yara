const btnAvançar = document.querySelector("#enviar");

btnAvançar.addEventListener("click", (e) => {
  e.preventDefault();

  const inputEmailUser = document.querySelector("#email");
  const emailDB = inputEmailUser.value;

  fetch('http://localhost:3000/usuarios')
    .then((res) => res.json())
    .then((jsonArray) => {
      const foundUser = jsonArray.find(user => user.email === emailDB);

      if (foundUser) {
        document.querySelector('.search-bar').classList.remove('error', 'highlight');
        document.querySelector('.search-bar').classList.add('highlight');

        // Passa o e-mail diretamente para a próxima página usando parâmetros de consulta na URL
        window.location.href = `forget-password.html?email=${encodeURIComponent(foundUser.email)}`;
      } else {
        document.querySelector('.search-bar').classList.remove('highlight');
        document.querySelector('.search-bar').classList.add('error');
        console.log('E-mail não encontrado no banco de dados');
      }
    });
});

