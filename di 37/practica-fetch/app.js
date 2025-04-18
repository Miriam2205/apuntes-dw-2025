//----------------------------------------------------------------//
// Parte 1: Declaramos nuestras variables y referencias del DOM
//----------------------------------------------------------------//
const cargarBtn = document.querySelector("#cargarBtn")
const limpiarBtn = document.querySelector("#limpiarBtn")
const filtrarBtn = document.querySelector("#filtrarBtn")

const spinner = document.getElementById("spinner");
const perfilesContainer = document.getElementById("perfiles");
const errorContainer = document.getElementById("error");
const errorText = document.getElementById("errorText");

const listaUsuarios = []
//----------------------------------------------------------------//
// Parte 2: Funciones y Event Listener
//----------------------------------------------------------------//


// Función para Mostrar/Ocutar spinner
const toggleSpinner = (visible) => {
    // spinner.classList.toggle("hidden");
    if(visible == "on"){
        spinner.classList.add("hidden");
    } else {
        spinner.classList.remove("hidden");
    }
}

// Función para Mostrar Error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    errorContainer.classList.remove("hidden");
}

const mostrarDatos = (listaUsuarios) => {
    // imprimir en pantalla las tarjetas de usuarios
    listaUsuarios.forEach(usuario =>{
        perfilesContainer.container.innerHTML += crearTarjetaPerfil(usuario);
    })
}

//Funciones de Mostrar Datos
const crearTarjetaPerfil = (usuario) => {

    const {id, nombre, profesion, habilidades, experiencia, avatar} = usuario;
       return `<div class="profile-card flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2x1">
                <div>
                <img class="size-48 shadow-xl rounded-md" alt="" src="${avatar}" />
            </div>
            <div class="flex items-center md:items-start">
                <span class="text-2xl font-medium">${nombre}</span>
                <span class="font-medium text-sky-500">${profesion}The Anti-Patterns</span>
                <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                <span>No. 4</span>
                <span>.</span>
                <span>2025</span>
                </span>`
    };



// Función para Ocultar Error
const ocultarError = () => {
    errorContainer.classList.add("hidden");
}

const cargarDatos = () => {
    try{
        const response = await fetch("./db/datos.json");
        const listaUsuarios = await response.json();
        //llamar a la funcion de mostrar Datos en el HTML
        mostrarDatos(listaUsuarios);

    }catch(error){
        console.warn("Tuvimos un error obteniendo los datos")
    }
}

cargarBtn.addEventListener("click", cargarDatos);




//----------------------------------------------------------------//
// Parte 3: Código de nuestra app
//----------------------------------------------------------------//



mostrarError("CUIDADO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");