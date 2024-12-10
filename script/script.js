// Obtén el botón de menú y el contenedor del menú lateral
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

// Agrega el evento para mostrar/ocultar el menú lateral al hacer clic en el icono de hamburguesa
menuToggle.addEventListener("click", function() {
    sideMenu.classList.toggle("open");  // Abre o cierra el menú
    document.body.classList.toggle("menu-open");  // Ajusta el margen del cuerpo para que el contenido no se solape
});
