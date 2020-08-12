'use strict'
/*
var categorias = ["Accion", "Terror", "Comedia"];
var peliculas= ["la verdad duele", "La vida es bella", "Gran torino"];

var cine= [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][1]);
*/
// añadir elemento a arrays

var peliculas= ["la verdad duele", "La vida es bella", "Gran torino"];
/*
peliculas.push("Batman");
console.log(peliculas);

var elemento= prompt("Introduce tu pelicula");
do{
    elemento="";
    peliculas.push(elemento);

   }while(elemento != "acabar");
    
  console.log(peliculas); 
  peliculas.pop();

  /*/
  //indexof() para buscar un indice
 var indice= peliculas.indexOf("Gran torino");
 console.log(indice);

 //SPLICE permite borrar elementos
 peliculas.splice(1,1)
 console.log(peliculas);

 //JOIN lo convierte a un  string

var peliculas_string= peliculas.join( )
console.log(peliculas_string);

//SPLIT se usa para separar un array

var cadena="texto1, texto2, texto3";
var cadena_array= cadena.split(", ");

console.log(cadena_array);

//ordenar arrays
// SORT
var num_array= [7, 89, 56, 3, 1];
 num_array.sort();
console.log(num_array);
// REVERSE te muestra el orden inverso

num_array.reverse();
console.log(num_array);


