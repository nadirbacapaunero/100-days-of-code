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



  Debés crear una función llamada `oneProperty` 
  que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, 
  teniendo como parámetro la propiedad que fue pasada como string.
   Ejemplo: var arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ] oneProperty(arreglo, “edad”) 
  debe retornar [ { edad: 20 }, { edad: 22 } ] oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]



function oneProperty (array, str) {
  this.array=array;
  this.str=str
}
  

var array = [ { name: 'lucas', 
                edad: 20 }, 
               { name: 'santi',
                  edad: 22 } ];

                 
Sumatoria
debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores,
 incluso ese mismo. Ejemplo: sumattion(3) debe retornar 6 por que hace (1 +2 +3) sumattion(8) debe retornar 36




  
function sumattion(num) {
  var i = 1;
  while (i<= num) {
    console.log(i + num);
    i++;
    
  };
}


Caracter del medio
Debés crear una función llamada `middleCharacter` 
que reciba un `string` por parámetro y devuelva sus caracteres del medio. 
Ejemplo: middleCharacter(“plataforma5”) debe retornar “f”middleCharacter (“hola”) 
debe retornar “ol”middleCharacter (“cosas”) debe retornar “s”



function middleCharacter(str) {
  for(var i=0; i<= str.length; i++){
        var string = str[i] 
      
          console.log(string.toChart(i))}
  
    
    
  };
  
  function removeChar(str){
    //You got this!
     
         str.substring(1, str.length-1)
     
      
   };
   
   function nuevoArreglo(num) {
     for (let i = 0; i <= num; i++) {
       var nuevoArr = num[i];
       
     }
   }

   

   function nuevoarreglo(num){
     var array=[] 
     array.push(num * 1)
   } console.log(array);
   

   function digitize(n) {
  //code here
    for (var i = 0; i < n.length; i++) {
       var array = array.push([i]);
      
    }
    
}
1. Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

function loopDePares (num){
  for (var i = 1; i <= 100; i++) {
    if((num + i )% 2 === 0)
    console.log("El numero " +i+ " es par");
    
  }

};
2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

function loopDeImpares (num, str){
  for (var i = 1; i <= 100; i++) {
    if( (i + num) % 2 === 0) {
    console.log("El numero " +i+ str);
}else console.log(i)
    
  }

};

3. Sumatoria
	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
sumattion(3) debe retornar 6 por que hace (1 +2 +3)
sumattion(8) debe retornar 36

 
function sumattion(num) {
  var sum = 0;
    for (var i = 1; i <= num; i++) {
       sum = sum + i
if(i === num){
      
      console.log(sum);}
    
      
    }
    
  };


  4. Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo` que 
reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]



  
 function nuevoArreglo(num) {
  var array=[];
for(var i= 1; i<= num; i++){
    array.push(i)
} console.log(array);
}


5. Similar String.split()
Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

function split(str) {
  var nuevoStr=[]
    for (var i = 0; i < str.length; i++) {
         nuevoStr.push(''+str[i]+'');
      
    }console.log(nuevoStr)
  }

  6. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s”

 

  }
  7. Mover ceros a lo último
  Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.
  
  Ejemplo: 
  moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
  moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
  

var array=[1,2,0,1,0,1,0,3,0,1];

function moverZeros(array){
  const nuevoarray=[];
  nuevoarray.push(array)
} console.log(nuevoarray)
*/