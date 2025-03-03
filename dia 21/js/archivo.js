//----------MODO OSCURO
document.addEventListener('DOMContentLoaded', function() {
    const btnDarkLight = document.getElementById('btnDarkLight');
    const body = document.body;

    btnDarkLight.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});



//---------ACORDEON---------------//
// Codigo JS para nuestro acordeon
// seleccionar todos los items con la clase "acordeon__item"
const lista_items = document.querySelectorAll(".Accordion-item");
// Recorrer cada uno de ellos
lista_items.forEach(item => {
    item.addEventListener("click", () => {
        //Quitarle la clase open a todos
        lista_items.forEach(item => item.classList.remove("open"));
        // Agregarle la clase open al que le hice click
        item.classList.add("open");
    });

});