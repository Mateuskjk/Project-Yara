//Esconde menu hamburger que é ativado na responsividade==
const navBar = document.getElementById("loginButton");

function togglebtn() {
  navBar.classList.toggle("hidemenu");
}
//========================================================


//Desativa o input Data de Volta =========================
document.getElementById('select').addEventListener('change', function(){
  var selectValue = parseInt(this.value);
  var input = document.getElementById('volta');

  if(selectValue < 0) {
    document.getElementById('volta').disabled = true
  } else {
    document.getElementById('volta').disabled = false
  }
});
//========================================================


//botão do final leva pro topo da página=================
var startButton = document.querySelector('.start-btn');
startButton.addEventListener('click', function() {
  window.scrollTo(0, 0, {
    duration: 3000,
  });
});
//======================================================


//link 1 leva a uma seção do site ====================
function scrollActive1() {
  const sections1 = document.querySelectorAll("section");

  sections1.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);

    if (link && rect.top >= 0 && rect.bottom <= window.innerHeight) {
      link.classList.add("active");
    } else if (link) {
      link.classList.remove("active");
    }
  });
}
//======================================================



//link 2 leva a uma seção do site ====================
function scrollActive2() {
  const sections2 = document.querySelectorAll("section");

  sections2.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);

    if (link && rect.top >= 0 && rect.bottom <= window.innerHeight) {
      link.classList.add("active");
    } else if (link) {
      link.classList.remove("active");
    }
  });
}
//======================================================


//link 3 leva a uma seção do site ====================
function scrollActive3() {
  const sections3 = document.querySelectorAll("section");

  sections3.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);

    if (link && rect.top >= 0 && rect.bottom <= window.innerHeight) {
      link.classList.add("active");
    } else if (link) {
      link.classList.remove("active");
    }
  });
}

//======================================================


// Função de captura dos valores na Search Bar===========
const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
	e.preventDefault();

	const inputOrigem = document.querySelector("#from");
	const inputDestino = document.querySelector("#to");
	const inputData1 = document.querySelector("#date1");
	const inputData2 = document.querySelector("#volta");
	const inputIdaEVolta = document.querySelector("#select");
	const inputClasse = document.querySelector("#classe");
	const inputPass = document.querySelector("#pass");

	const fromName = inputOrigem.value;
	const toName = inputDestino.value;
	const dateIdaName = inputData1.value;
	const dateVoltaName = inputData2.value;
	const idaEVoltaName = inputIdaEVolta.value;
	const classeName = inputClasse.value;
	const passName = inputPass.value;

	//CRIANDO UM OBJETO COM AS INFORMAÇÕES CAPTURADAS NA SEARCH INPUT======================================================
	const pesquisaInfo = {
		fromName,
		toName,
		dateIdaName,
		dateVoltaName,
		idaEVoltaName,
		classeName,
		passName,
	};
	// console.log(pesquisaInfo)

	const pesquisaInfoJSON = JSON.stringify(pesquisaInfo);

	/* const arq = JSON.stringify(pesquisaInfo) */
	/* console.log(arq) */
	localStorage.setItem('pesquisaInfo', pesquisaInfoJSON);

	window.location.href = "ticket.html";
})

// Realiza a solicitação para obter os destinos da URL
fetch('http://localhost:3000/destinos')
  .then(res => res.json())
  .then((json) => {
    console.log(json);
    const ul = document.getElementById('listarDestinos');
    json.forEach((destino) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="#">
          <span class="destino-name">${destino.destino}</span>
        </a>
      `;
      ul.appendChild(li);

      // Adiciona um ouvinte de evento de clique a cada LI
      li.addEventListener("click", function() {
        const destinoName = this.querySelector(".destino-name").textContent;
        const input = document.getElementById('from');
        input.value = destinoName.trim();

        // Volta o estilo display para "none" e remove a margem
        this.style.display = "none";
        this.style.margin = "0";
      });
    });
  });

//INPUT DO ORIGEM:
document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById('from');
  input.addEventListener("keyup", filtro);
});
  
// Função para filtrar destinos
function filtro() {
  var input, filter, ul, li, a, i, txtValue, span, count = 0;

  input = document.getElementById('from');
  ul = document.getElementById('listarDestinos');

  filter = input.value.toUpperCase();

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";

      count++;

      span = li[i].querySelector(".destino-name");

      if (span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
          return "<strong>" + match + "</strong>";
        });
      }
    } else {
      li[i].style.display = "none";
    }
  }

  if (count === 0) {
    ul.style.display = "none";
		ul.style.margin = 0
  } else {
    ul.style.display = "block";
		ul.style.margin = 0
  }

	if (count === 1) {
    ul.style.display = "block";
		ul.style.margin = 0
  } else {
    ul.style.display = "none";
		ul.style.margin = 0
  }
}




//INPUT DO DESTINO:
fetch('http://localhost:3000/destinos')
  .then(res => res.json())
  .then((json) => {
    console.log(json);
    const ul = document.getElementById('listarDestinosVolta');
    json.forEach((destino) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="#">
          <span class="destino-name">${destino.destino}</span>
        </a>
      `;
      ul.appendChild(li);

      // Adiciona um ouvinte de evento de clique a cada LI
      li.addEventListener("click", function() {
        const destinoName = this.querySelector(".destino-name").textContent;
        const input = document.getElementById('to');
        input.value = destinoName.trim();

        // Volta o estilo display para "none" e remove a margem
        this.style.display = "none";
        this.style.margin = "0";
      });
    });
  });

//INPUT DO ORIGEM:
document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById('to');
  input.addEventListener("keyup", filtroDestino);
});
  
// Função para filtrar destinos
function filtroDestino() {
  var input, filter, ul, li, a, i, txtValue, span, count = 0;

  input = document.getElementById('to');
  ul = document.getElementById('listarDestinosVolta');

  filter = input.value.toUpperCase();

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";

      count++;

      span = li[i].querySelector(".destino-name");

      if (span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
          return "<strong>" + match + "</strong>";
        });
      }
    } else {
      li[i].style.display = "none";
    }
  }

  if (count === 0) {
    ul.style.display = "none";
		ul.style.margin = 0
  } else {
    ul.style.display = "block";
		ul.style.margin = 0
  }

	if (count === 1) {
    ul.style.display = "block";
		ul.style.margin = 0
  } else {
    ul.style.display = "none";
		ul.style.margin = 0
  }
}