let numero=23;
console.log(numero);

let string= "Hola"
console.log(string);

let esMayorDeEdad= true;
console.log(esMayorDeEdad);

let nulo= null;
console.log(nulo);

let indifinido = undefined;
console.log(indifinido);

let simbolo = Symbol;
console.log(simbolo);

let grande = BigInt;
console.log(grande);





//Actividad 2

let a= 10;
let b= 5;
let esMayor = ( a > b);
console.log(esMayor);


let esIgual = (a==b);
let esEstrictamenteIgual = (a==b);
console.log(esIgual);



//Ver si es mayor de edad, pero si no lo es, ver si tiene permiso
const edad=25;
const tienePermiso = true;
if(edad>=18){
    console.log("Es mayor de edad");
}
else{
    console.log("Es menor de edad");
}

if(edad>=18){
    console.log("Puedes salir a bailar")
} else{
    
    if(tienePermiso == true){
        console.log("Puede salir a bailar");
    } else{
        console.log("No puede salir a balar");
    }
}


//Otra manera de hacerlo
if(edad>=18){
    console.log("Puedes salir a bailar")
} else if(tienePermiso == true){
        console.log("Puede salir a bailar");
    } else{
        console.log("No puede salir a balar");
    }


//bucles para repetir una tarea

for(let i=0; i<5; i=i+1){
    console.log("hacer una tarea");
    console.log('<img src="foto/foto' +i+'" alt="Texto '+i+'" />')
}
console.log("termine bucle"); 


//numeros del 10 al 1
for(let i=10; i>0 ; i--){
    console.log("numero:", i);
}