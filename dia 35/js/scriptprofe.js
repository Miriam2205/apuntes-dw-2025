// SELECCIONAR ELEMENTOS DEL HTML
const containerBloques = document.querySelector(".container");
const listaBloques = containerBloques.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button"); 
const containerCanciones = document.querySelector("#containerCanciones");

let idCancionActual = 0;
const listaTemas =[

{
    id: 1,
    artista: "Coldplay",
    titulo: "Viva La Vida",
    imagen: "img/coldplay.jfif",
    fuente: "https://www.example.com/audio/viva_la_vida.mp3"
},
{
    id: 2,
    artista: "Ed Sheeran",
    titulo: "Shape of You",
    imagen: "img/edsheeran.jfif",
    fuente: "https://www.example.com/audio/shape_of_you.mp3"
},
{
    id: 3,
    artista: "The Weeknd",
    titulo: "Blinding Lights",
    imagen: "img/the weekend.jfif",
    fuente: "https://www.example.com/audio/blinding_lights.mp3"
},
{
    id: 4,
    artista: "Dua Lipa",
    titulo: "Levitating",
    imagen: "img/dualipa.jfif",
    fuente: "https://www.example.com/audio/levitating.mp3"
},
{
    id: 5,
    artista: "Imagine Dragons",
    titulo: "Believer",
    imagen: "img/imagin dragons.jfif",
    fuente: "https://www.example.com/audio/believer.mp3"
}
];


//NAVEGACION//
listaButtons.forEach((button) => {

})
//LISTA TEMAS//
listaTemas.forEach(tema =>{
    const {id, titulo, artista, imagen, fuente} = tema;
    console.log(titulo);
    //usamos innerHTML para crear nuestros temas
    containerCanciones.innerHTML += `<li class="cardCancion" data-id="${id}">
                                        <img class="imgCancion" src="./${imagen}" alt="${artista}">
                                    <div>
                                        <h2 class="titleCancion">${titulo}</h2>
                                        <small class="artistaCancion">${artista}</small>
                                    </div>
                                    </li>`;
//agarra el último hijo agregado para incluirle un eventListener
const cardCancion = containerCanciones.lastChild;

cardCancion.addEventListener("click", ()=>{
    cargarCancion(id);

})
});
//REPRODUCTOR//
listaButtons.forEach((button, idx) => {

    button.addEventListener("click", ()=>{
        //obtenemos el ID del target que quiero mostrar!
        const target = button.getAttribute('data-tab');

        //Actualizar la visibilidad de lo bloques
        listaBloques.forEach(bloque =>{
            bloque.classList.remove('active');
                //si el bloque es el que me interesa agregar active
            if(bloque.id == target){
                 bloque.classList.add("active");
            }
        });

        //Actualizar el boton activo de nav
        listaButtons.forEach(btn =>{
            btn.classList.remove("active");
        });
        button.classList.add("active");




        //OTRA FORMA DE HACER MÁS SIMPLE
        //A todos los bloques sacarle la clase .active
        //listaBloques.forEach((bloque, id) => {

            //listaBloques[id].classList.remove("active");
            //listaTabs[id].classList.remove("active");
        //})
        //Agregar la clase .active al bloque que me interesa
        //listaBloques[idx].classList.add("active");
        //listaButtons[idx].classList.add("active");
    });
});
//REPRODUCTOR//
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const nextBtn = document.querySelector(".fa-step-forward");
const prevBtn = document.querySelector(".fa-step-backward");
const audioPlayer = document.querySelector("#audioPlayer");

const divCurrentSongInfo = document.querySelector(".current-song-info")
pauseBtn.computedStyleMap.display="none";
//Funcion para cargar un tema
function cargarCancion(id){
    //recoremos nuestras canciones, y obtenemos solo la que me interesa
    const cancion = listaTemas.find(tema => tema.id == id);
    console.log(cancion);
    if(!cancion){
        return
    }
    console.log(cancion);
    audioPlayer.src = cancion.fuente;
    idCancionActual = id;

    divCurrentSongInfo.innerHTML =`
                <img src="./${imagen} alt="${artista}">
                <h2>${titulo}</h2>
                <p>${artista}</p>
                `;
    audioPlayer.play();
}

//Event listener de botones de reproductor

playBtn.addEventListener("click", ()=>{
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});
pauseBtn.addEventListener("click", ()=>{
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});
nextBtn.addEventListener("click",()=>{
    posicionTemaActual++;
    const idCancion = listaTemas [posicionTemaActual].id;
    cargarCancion(idCancion);
});