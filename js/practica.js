/*Implemente la función unique_in_order que toma como argumento una secuencia y devuelve una lista de elementos sin elementos con el mismo valor uno al lado del otro y preservando el orden original de los elementos.

Por ejemplo:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInorder= function  (iterable){
  //your code here - remember iterable can be a string or an array
        for(i=0; i<iterable.length; i++){

            nuevoArr= uniqueInorder.push[i]
        }

}

// convierte un numero a strings
function numberToString(num) {
    // Return a string of the number here!

    return num.toString()
}


Implemente un método que acepte 3 valores enteros a, b, c. El método debería devolver verdadero si se puede construir un triángulo con los lados de longitud dada y falso en cualquier otro caso.

(En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser aceptados).

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a < b + c && b < a + c && c < a + b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}



//Eliminar primer y último personaje

Su objetivo es crear una función que elimine el primer

y el último carácter de una cadena. Te dan un parámetro,
 la cadena original. No tiene que preocuparse por las cadenas 
 con menos de dos caracteres.


function removeChar(str){
    //You got this!
     
        return  str.substring(1, str.length-1)

   };




nstruir la torre
Construya la torre con el siguiente argumento dado:
número de pisos (entero y siempre mayor que 0).

El bloque de la torre se representa como *

 
 
 function towerBuilder(nFloors) {
    // build here
        
  }
*/

String.length
