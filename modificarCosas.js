function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function cambiarBG(color) {
    document.body.style.background = color;
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
