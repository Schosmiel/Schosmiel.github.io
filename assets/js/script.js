'use strict';
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


document.getElementById('downloadCvBtn').addEventListener('click', function() {
  // Nom de votre fichier CV
  var cvFileName = 'mon_cv.pdf';
  
  // Création d'un élément <a> temporaire
  var tempLink = document.createElement('a');
  tempLink.href = cvFileName;
  tempLink.download = 'Richard_GADJENOU_CV.pdf';
  
  // Ajout de l'élément temporaire au DOM et déclenchement du téléchargement
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
});

/* C'est ici le nouveau code */

function redirigerVersFormulaire() {
  window.location.href = "https://forms.gle/ffB6i2Eo6WcdWHZX9";
}
