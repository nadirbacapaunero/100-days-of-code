'use strict'

//Arrays, Arreglos, Matrices una coleccion de datos que puede tener una variable

var nombre = 'Nadir'
var nombres= ["Lucas","Matias", "Mario", 67, true, false]
//index         0      1          2      3      4    5

var lenguajes = new Array ("PHP", "JS", "Go", "JAVA");
console.log(nombres);
console.log(lenguajes);

console.log(nombres[1]);
// sacar la cantidad de elementos
console.log(nombres.length)

// como pedir elemento en un alert

var elemento= parseInt(prompt("Que elemento del array quieres?", 0));
//alert(nombres[elemento]);

if(elemento >=nombres.length){
    alert("Introduce un numero correcto menor que " + nombres.length);
} else {
    alert("El usuario seleccionado es: " +nombres[elemento]);
}

lenguajes.forEach((elemento)=>{
    document.write("<li>" +elemento+"</li>")
});
// BUQUEDA EN UN ARRAY  
var lenguaje=["PHP", "JS", "Go", "JAVA"]

 //var busqueda= lenguajes.findIndex(lenguaje => lenguaje == "JS");

console.log(busqueda);

//SOME para encontrar valor, para saber si estan

var precios= [10, 20, 80, 50, 12];

var busqueda= precios.some(precio => 50);

console.log(busqueda);




