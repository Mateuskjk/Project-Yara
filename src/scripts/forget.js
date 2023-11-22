const btnAvançar = document.querySelector("#enviar");

btnAvançar.addEventListener("click", (e) => {
  e.preventDefault();

  const inputEmailUser = document.querySelector("#email");

  const emailUser = inputEmailUser.value;

  const emailDB = localStorage.getItem("registerUser")
  const emailSaved = emailDB.email;

  const userDataEmail = {
    emailUser,
    emailSaved
  };

  const userEmailString = JSON.stringify(userDataEmail);
  console.log(userEmailString);

  localStorage.setItem("userDataEmail", userEmailString);

  fetch('http://localhost:3000/usuarios')
    .then((res) => res.json())
    .then((jsonArray) => {
      console.log(jsonArray);
      const emailFromLocalStorage = localStorage.getItem("userDataEmail");
      let foundEmailMatch = false;

      if (emailFromLocalStorage) {
        const emailsObject = JSON.parse(emailFromLocalStorage);

        for (const json of jsonArray) {
          if (emailsObject.emailUser === json.email) {
            foundEmailMatch = true;

            document.querySelector('.search-bar').classList.remove('error', 'highlight');
            document.querySelector('.search-bar').classList.add('highlight');

            window.location.href = 'forget-password.html';
            break;
          }
        }

        if (!foundEmailMatch) {
          document.querySelector('.search-bar').classList.remove('highlight');
          document.querySelector('.search-bar').classList.add('error');

          console.log('os dados não conferem');
        }
      } else {
        document.querySelector('.search-bar').classList.remove('highlight');
        document.querySelector('.search-bar').classList.add('error');

        console.log('email não encontrado');
      }
    });
});
