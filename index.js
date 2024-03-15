window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

var buscadorVisible = false; // Variable para almacenar el estado del campo de búsqueda

document.getElementById("mostrarBtn").addEventListener("click", function() {
    var input = document.getElementById("buscador");
    var input2 = document.getElementById("buscador2");
    buscadorVisible = !buscadorVisible; // Cambiar el estado del campo de búsqueda

    if (buscadorVisible) {
        input.style.opacity = 1; // Mostrar el campo de búsqueda
        input.style.pointerEvents = "auto"; // Permitir interacción con el campo de búsqueda
        input2.style.opacity = 1; // Mostrar el campo de búsqueda
        input2.style.pointerEvents = "auto"; // Permitir interacción con el campo de búsqueda
    } else {
        input.style.opacity = 0; // Ocultar el campo de búsqueda
        input.style.pointerEvents = "none"; // No permitir interacción con el campo de búsqueda
        input2.style.opacity = 0; // Ocultar el campo de búsqueda
        input2.style.pointerEvents = "none"; // No permitir interacción con el campo de búsqueda
    }
});

