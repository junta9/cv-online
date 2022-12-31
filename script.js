
// *******Animation navbar qui s'affiche que lorqu'on remonte en scrollbar*******
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    const scrollTop = window.pageyoffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});

// ******************TYPE TEXT***************
var i = 0;
var txt = `Souhaitant faire de ma première passion mon métier, j’ai entrepris
une reconversion professionnelle pour devenir un expert du numérique
où s’allie compétences techniques, qualités personnelles et
relationnelles.`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".eltyped").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setInterval(typeWriter(), 1000);