const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector ("#bmenu");
const mobilMenu = document.querySelector (".links");
const moreMenu = document.querySelector (".more .menu");

//Eventos para el menu desplegable (cambia el estado a show)
bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();//esta linea evita la accion del evento click por defecto (no abre nueva pag.)
    mobilMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});