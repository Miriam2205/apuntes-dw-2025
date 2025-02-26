const btnDarkLight = document.querySelector("#btnDarkLight");
btnDarkLight.addEventListener("click", () => {
    document.body.classList.toggle("u-Dark");
    const span = btnDarkLight.querySelector("span");
    span.innerText = document.body.classList.contains("u-Dark") ? "light_mode" : "dark_mode";
});

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