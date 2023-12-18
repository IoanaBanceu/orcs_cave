const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

const openMenu = function () {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-bars-staggered' : 'fa-solid fa-bars';
}

// toggleBtn.onclick =openMenu 

// Get the button 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}