'use strict'
//DOM document object Model
// getElementyById
 //var caja = document.getElementById("micaja")

 // selecciono elemento de html con querySelector
// le tengo que colocar el elemento si id el # si es clase el punto .
 
 function cambiaColor(color){
     caja.style.background= color;
 }

 /*
 var caja = document.querySelector("#micaja");
 caja.innerHTML= "!texto en la caja desde js¡";
 caja.style.background="blue";
 caja.style.padding="10px";
 caja.className="hola";
 */


// conseguir elementos por su etiqueta
var todosLosDivs= document.getElementsByTagName("div");

var contenido= todosLosDivs[2];
//agregar texto con ineerHTML

contenido.innerHTML="otro texto para ese elemento";


console.log(contenido);



//conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName("rojo");
var divaAmarillos= document.getElementsByClassName("amarillo");
divaAmarillos[0].style.background= "yellow";
var div;
for (div in divsRojos){
    if(divsRojos[div].className== "rojo")
    divsRojos[div].style.background="red";
}

//querySelector

var id= document.querySelector("#encabezado");
console.log(id);

//querySelectorAll

//para seleccionar muchos elementos


