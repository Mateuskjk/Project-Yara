

//Esconde menu hamburger que é ativado na responsividade==
var navBar = document.getElementById("navBar");

function togglebtn(){
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
const sections = document.querySelectorAll('div[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
//======================================================



//link 2 leva a uma seção do site ====================
const sections2 = document.querySelectorAll('div[id]')
    
const scrollActive2 = () =>{
  	const scrollDown = window.scrollY

	sections2.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive2)
//======================================================


//link 3 leva a uma seção do site ====================
const sections3 = document.querySelectorAll('h2[id]')
    
const scrollActive3 = () =>{
  	const scrollDown = window.scrollY

	sections1.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive3)
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
	console.log(pesquisaInfo)

	const arq = JSON.stringify(pesquisaInfo)
	console.log(arq)
})

