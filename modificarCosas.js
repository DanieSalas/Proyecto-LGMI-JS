let fondoNegro = false;  // Variable para seguir el estado del fondo

// Función para cambiar entre fondo blanco y negro
function cambiarBG() {
    if (fondoNegro) {
        document.body.style.backgroundColor = "white"; // Cambia el fondo a blanco
    } else {
        document.body.style.backgroundColor = "black"; // Cambia el fondo a negro
    }
    fondoNegro = !fondoNegro; // Alterna el estado para la próxima vez
}

// Aquí tienes las otras funciones que ya tienes en tu código
function cambiarColorTexto(color) {
    document.body.style.color = color;
}

function cambiarTamaño(size) {
    document.body.style.fontSize = size;
}

function cambiarTipoTexto(font) {
    document.body.style.fontFamily = font;
}
