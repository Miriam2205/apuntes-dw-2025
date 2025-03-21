// SELECCIONAR ELEMENTOS DEL HTML
const containerBloques = document.querySelector(".container");
const listaBloques = document.querySelectorAll(".tab-content");
const listaTabs = document.querySelectorAll(".nav-button"); // Estaba mal escrito

// RECORREMOS CADA BOTÓN DEL MENÚ DE NAVEGACIÓN
listaTabs.forEach((button, idx) => {
    // Agregamos un evento click a cada botón
    button.addEventListener("click", () => {
        // Obtenemos el ID del target que quiero mostrar
        const target = button.getAttribute("data-tab");

        // Ocultar todas las pestañas y quitar 'active' de todos los botones
        listaBloques.forEach((bloque) => {
            bloque.classList.remove("active");
            if (bloque.id === target) {
                bloque.classList.add("active"); // Mostrar solo la pestaña correcta
            }
        });

        // Quitar 'active' de todos los botones
        listaTabs.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Activar el botón que fue clicado
        button.classList.add("active");
    });
});
//ARRAY DE OBJETOS DE CANCIONES

const canciones = [
{ 
    id: 1, titulo: "Thriller", artista: "Michale Jackson", imagen: "img1.jpg",  fuente: "https://mi-musica.com/tema-1.mp3&quot; "},
{ 
    id: 2, titulo: "Canción 1", artista: "Artista 2", imagen: "img1.jpg",  fuente: "https://mi-musica.com/tema-1.mp3&quot; "},
{ 
    id: 3, titulo: "Canción 1", artista: "Artista 3", imagen: "img1.jpg",  fuente: "https://mi-musica.com/tema-1.mp3&quot; "},
    
]

const listaCanciones = document.querySelector("#listaCanciones");

canciones.forEach((canciones, idx)=>{
    listaCanciones.innerHtml +=
        `div class="cancion">
            <span> ${artista}</span>
                                    <span> ${cancion}</span>`
})