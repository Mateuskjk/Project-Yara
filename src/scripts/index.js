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


// function changeLinkStyles(linkContainer) {
//   const links = document.querySelectorAll('.nav-links');

//   links.forEach(link => {
//       link.classList.remove('active');
//   });
  

//   linkContainer.classList.add('active');

// }






