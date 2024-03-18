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

document.addEventListener("DOMContentLoaded", function() {
    // Verificar si es un dispositivo móvil o PC
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Obtener los elementos de video
    var videoMobile = document.getElementById("mobile");
    var videoPC = document.getElementById("pc");

    // Función para reproducir el video correspondiente
    function reproducirVideo() {
        if (isMobile) {
            videoMobile.muted = false; // Desmutea el video móvil
            videoPC.muted = true; // Mantiene el video de PC en mute
        } else {
            videoPC.muted = false; // Desmutea el video de PC
            videoMobile.muted = true; // Mantiene el video móvil en mute
        }
    }

    // Reproducir el video correspondiente al cargar la página
    reproducirVideo();


    
   // Mostrar el popup
   var popup = document.getElementById("pop");
   popup.style.opacity = 1;

   // Evento para cerrar el popup y detener la reproducción de video
   document.getElementById("cerrar").addEventListener("click", function(){
       popup.style.display = "none"; // Ocultar el popup
       popup.style.pointerEvents= "none" // Deshabilitar interacción con el popup
       videoMobile.pause(); // Pausar el video móvil
       videoPC.pause(); // Pausar el video de PC
       // Restaurar el comportamiento normal del botón de cerrar
       this.removeEventListener("click", arguments.callee);
   });
});

document.getElementById("vol1").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=AgMe7oLLn-U&list=PLieXek9ZQ8RbL2jG-0qsDS44kFmjZFKiu";
});

document.getElementById("vol2").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=hnrQsLHfiEQ&list=PLieXek9ZQ8RYX99PZAl6GaeIJkVIOyuvR";
});

document.getElementById("vol3").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=HYeAeJOlNak&list=PLieXek9ZQ8RbY6L2G6Ro2hz-reEyaORlw";
});
