let fondoNegro = false;


function cambiarBG() {
    if (fondoNegro) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
    fondoNegro = !fondoNegro;
}


function cambiarColorTexto(color) {
    document.body.style.color = color;
}

function cambiarTamaño(size) {
    document.body.style.fontSize = size;
}

function cambiarTipoTexto(font) {
    document.body.style.fontFamily = font;
}
