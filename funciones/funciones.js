/* FUNCION 1 (Para index.html): Saludo interactivo */

function saludoPiloto() {
    let nombre = prompt("¡Semáforo en verde! ¿Cómo te llamas, piloto?");
    if (nombre) {
        alert("¡Bienvenido al paddock, " + nombre + "! Prepara los neumáticos.");
    }
}

/* FUNCION 2 (Modo oscuro)*/
function cambiarModoOscuro() {
    let body = document.body;
    // Cambia los colores de fondo y texto de toda la página //
    if (body.style.backgroundColor === "rgb(26,26,26)") {
        body.style.backgroundColor = "";
        body.style.color="";
    } else {
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "#f0f0f0";
    }
}

/* FUNCION 3 Mostrar/Ocultar */
function mostrarDetalles() {
    let extra = document.getElementById("info-adicional");
    if (extra.style.display === "none" || extra.style.display === "") {
        extra.style.display = "block";
    } else {
        extra.style.display = "none";
    }
}