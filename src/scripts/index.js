var navBar = document.getElementById("navBar");

function togglebtn(){
  navBar.classList.toggle("hidemenu");
}



document.getElementById('select').addEventListener('change', function(){
  var selectValue = parseInt(this.value);
  var input = document.getElementById('volta');

  if(selectValue < 0) {
    document.getElementById('volta').disabled = true
  } else {
    document.getElementById('volta').disabled = false
  }
});

document.getElementsByClassName('start-btn').addEventListener('click', function() {
  window.scrollTo(0, 0, {
    duration: 3000,
  });
});





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






const sections4 = document.querySelectorAll('nav[id]')
    
const scrollActive4 = () =>{
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
window.addEventListener('scroll', scrollActive4)
