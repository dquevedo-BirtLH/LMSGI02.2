/* FUNCION 1 (Para index.html): Saludo interactivo */

function saludoPiloto() {
    let nombre = prompt("¡Semáforo en verde! ¿Cómo te llamas, piloto?");
    if (nombre) {
        alert("¡Bienvenido al paddock, " + nombre + "! Prepara los neumáticos.");
    }
}

/* FUNCION 2 (Modo oscuro)*/
function cambiarModoOscuro() {
    document.body.classList.toggle("modo-oscuro");
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