window.onload = function () {
    // Este código se ejecuta cuando todos los recursos de la página se han cargado
    const botonMenu = document.querySelector(".barras-menu");
    const contenidoMenu = document.querySelector(".menu-desplegable");
    const cerrarMenu = document.querySelector(".cerrar-menu");
    const overlay = document.querySelector(".overlay");
    const contenidoPrincipal = document.querySelector(".contenido-principal");

    // Evento de clic en el botón de apertura del menú
    botonMenu.addEventListener("click", function () {
        contenidoMenu.style.right = "0";
        overlay.style.display = "block";
    });

    // Evento de clic en el botón de cierre del menú
    cerrarMenu.addEventListener("click", function () {
        contenidoMenu.style.right = "-100vw";
        overlay.style.display = "none";
    });

    // Evento de clic en el botón de apertura del menú (segunda acción)
    botonMenu.addEventListener("click", function () {
        contenidoMenu.classList.toggle("mostrar");
        overlay.classList.toggle("mostrar-overlay");
    });

};