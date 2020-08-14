'use strict'
/*
1 pide 6 numeros x pantalla y los meta en un array.
2 Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y la consola.
3 ordenar y mostrarlo
4 invertir su orden y mostrarlo
5 mostrar cuantos elementos tiene su array
6 Busqueda de un valor introducido  por el usuario, que nos diga si lo encuentra y su indice
*/
function mostrarArray(elementos, textoCustom= ""){
    document.write("<h1> Contenido del array " +textoCustom+ "</h1>" )
    document.write("<ul>");
    elementos.forEach((elemento, index)=> {
        document.write("Estos son los numeros <li> " +elemento+ "</li>");
    });
    document.write("</ul>");
}
// pedir 6 numeros
var numeros=[];

for (let i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introduzca un numero")))
    
} 
// mostrar el contenido por consola
console.log(numeros);
//mostrar en el cuerpo de la pagina
 mostrarArray(numeros);

// ordenar y mostrar
numeros.sort(function(a, b){return a- b});
mostrarArray(numeros, "ordenado");

// invertir y mostrar
numeros.reverse();
numeros.sort(function(a, b){return a- b});
mostrarArray(numeros, "ordenado");

//contar elementos

document.write("<h1>El array tiene: " +numeros.length+ " elementos</h1>");

//busqueda
var busqueda= parseInt(prompt("Busca un numero", 0));
var posicion= numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1 ){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: " +posicion+ "</h1>")
} else {
    document.write("<h1> no encontrado</h1>");
};