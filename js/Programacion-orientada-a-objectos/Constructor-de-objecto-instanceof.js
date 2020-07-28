/*
Cada vez que una función constructora crea un nuevo objeto, 
se dice que ese objeto es una instancia de su constructor.
 JavaScript ofrece una forma conveniente de verificar esto 
 con el instanceofoperador. instanceofle permite comparar
  un objeto con un constructor, regresando true 
  o en false función de si ese objeto fue creado o no con el constructor.
   Aquí hay un ejemplo:*/

   let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird; // => true

  let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
  canary instanceof Bird; // => false

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse= new House (7);
  
  myHouse instanceof House; //=> true
  