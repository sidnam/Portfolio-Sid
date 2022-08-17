const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
mybutton = document.getElementById("toTop");

navToggle.addEventListener('click', () => { 
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => { 
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {

  modal.showModal();

})

closeModal.addEventListener('click', () => {

  modal.close();

})
