
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function toggleNav() {

    var x = document.getElementById("link-menu");

    if (x.style.display === "none") {

      x.style.display = "inline-flex";

    } else {

      x.style.display = "none";

    }
};
/*Aqui estan las funciones para cambiar las portadas de los 3 libros con Hover*/
//Primer Libro - Arriba


/* Codigo no optimizado esta en estas dos funciones que se ejecutan por eventos en el DOM, pendiente su mejora */

function hoverPrimero(element) {
  document.getElementById("portlibro1").setAttribute('src', 'assets/img/portchica-agosto-hover.jpg');
}

function unhoverPrimero(element) {
  document.getElementById("portlibro1").setAttribute('src', 'assets/img/port-chica-agosto.jpg');
}

function hoverSegundo(element) {
  document.getElementById("portlibro2").setAttribute('src', 'assets/img/portchica-agosto-hover.jpg');
}

function unhoverSegundo(element) {
  document.getElementById("portlibro2").setAttribute('src', 'assets/img/port-chica-agosto.jpg');
}

function hoverTercero(element) {
  document.getElementById("portlibro3").setAttribute('src', 'assets/img/portchica-agosto-hover.jpg');
}

function unhoverTercero(element) {
  document.getElementById("portlibro3").setAttribute('src', 'assets/img/port-chica-agosto.jpg');
}
