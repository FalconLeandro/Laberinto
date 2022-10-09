/*INICIO Logica para crear la cruz del menu burguer*/
const burguer = document.querySelector("#menu-burguer");
const linea1 = document.querySelector(".linea1");
const linea2 = document.querySelector(".linea2");
const linea3 = document.querySelector(".linea3");


burguer.addEventListener("click", lineaAnimada);
// menu.addEventListener("click", navMovimiento);


function lineaAnimada(){

    linea1.classList.toggle("linea1active");
    linea2.classList.toggle("linea2active");
    linea3.classList.toggle("linea3active");
    document.body.classList.toggle("scroll-none");
}
/*FIN Logica para crear la cruz del menu burguer*/

const links = document.querySelectorAll(".menu-a");
function doit() {
    linea1.classList.toggle("linea1active");
    linea2.classList.toggle("linea2active");
    linea3.classList.toggle("linea3active");
    document.body.classList.toggle("scroll-none");
}
links.forEach(cbox =>{cbox.addEventListener("click", doit);})