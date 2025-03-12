const numeros =[3,5,8,9,12]
const numerosImpares = numeros.filter(num => num % 2 != 0);
console.log(numerosImpares)



const personajes =[
    {nombre: "Juan", edad: 33},
    {nombre: "Pedro", edad: 18},
    {nombre: "Ana", edad: 15},

]
personajes.forEach(personaje =>{
    console.log(personaje.nombre);
})
console.log(personajes.nombre); 


const libros = [
    {titulo: 'El quijote' ,autor: 'miguel de cervantes'},
    {titulo: 'Cien años de soledad', autor: 'gabriel garcia marquez'},
    {titulo: 'La odisea', autor: 'Homero'},
]
const inpuValue = "La odisea"
const libro = libros.find(libro => libro.titulo == inputValue);

console.log(libro); // { titulo: 'La odisea', autor: 'Homero' }

const libroDeseado = libros.find(libro=> libro.titulo.toLowerCase().includes('cien años'));


const number =[5,20,3,-10,5,25,100005];
//const ordenados = numeros.sort(function (a,b){return a = b;});
const ordenados = number.sort((a,b)=>a = b);
console.log(ordenados);