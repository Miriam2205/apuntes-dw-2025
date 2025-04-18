

// Función para Ocultar Error
const ocultarError = () => {
    errorContainer.classList.add("hidden");
}

const mostrarDatos = (listaUsuarios) => {
    // imprimir en pantalla las tarjetas de usuarios
    listaUsuarios.forEach(usuario =>{
        perfilesContainer.container.innerHTML += crearTarjetaPerfil(usuario);
    })
}
const crearTags(listaDeItems) =>{
    listaDeItems.map(item =>{
        return`<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">${item}JavaScript</span>`;
    })
    return miHtml.join(' ');
}
const crearTarjetaPerfil = (usuario) =>{
    //deconstruccion de objetos 
    const {id, nombre, profesion, habilidades, experiencia, avatar} = usuario;
    const habilidadesEtiquetas =crearTags(habilidades)
    return`<div class="profile-card bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex items-center justify-center h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="${avatar}" alt="${nombre}">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">${nombre}</h3>
<p class="text-indigo-600 font-medium">${profesion}Desarrolladora Frontend</p>
                    <div class="mt-3">
                        <p class="text-gray-700"><span class="font-semibold">Experiencia:</span>${experiencia} 3 años</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span> <span class="bg-indigo-100 text-indigo-800 hover:bg-indig
<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                    </div>
                </div>
            </div>`
}


//todo lo enviado por el profesor 25/03
console.log(" 1) solicitar al camarero un plato de ensalada de atún");
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");
function pedirPlato(plato) {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}
Tomás Sánchez
20:33
const cargarBtn = document.getElementById("cargarBtn");
const limpiarBtn = document.getElementById("limpiarBtn");
const filtrarBtn = document.getElementById("filtrarBtn");

const spinner = document.getElementById("spinner");
const perfilesContainer = document.getElementById("perfiles");
const errorContainer = document.getElementById("error");
const errorText = document.getElementById("errorText");
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
// Función para Ocultar Error
const ocultarError = () => {
    errorContainer.classList.add("hidden");
}
const mostrarDatos = (datos) => {
    // imprimir en pantalla las tarjetas de usuarios
}
cargarBtn.addEventListener("click", cargarDatos);

// ------------------------------------------------------------
// Parte 3: Código de nuestra app
// ------------------------------------------------------------


mostrarError("CUIDADOO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");
Tomás Sánchez
21:22

Tomás Sánchez
21:58
function esperar(milisegundos) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milisegundos);
}