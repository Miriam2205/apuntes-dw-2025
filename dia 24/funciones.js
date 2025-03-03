
let num1 =10;
let num2 = 10;
function sumar(){
    console.log(num1+num2);
}
sumar()

function multi(){
    console.log(num1*num2);
}


//funcion saludo


function saludar(nombre, edad){
    console.log("Hola "+ nombre +" como andas?");
    console.log("Tienes:", edad);
}


//Ejercicio1
function sumar(cifra){
    console.log( cifra );
}

function restar(resta){
    resta = 500000
    console.log( resta );
}

restar(23-5);

//function multi (paramatero 1, parametro 2){....}
function multi(num_a, num_b){
    console.log("multi")
}
function multiplicar(multi){
    console.log(multi);
}


////////
function sumar(num1, num2){
    //return num1+num2;
    const res = num1+num2;
    return res;
}
const resultado = sumar(5,3);
