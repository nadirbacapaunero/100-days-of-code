/*Se llaman own propiedades,
 porque se definen directamente en el objeto de instancia.*/

 function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety"); 
let ownProps = [];
for(let property in canary) {
  if(canary.hasOwnProperty (property))
  {ownProps.push(property);
  }
}
console.log (ownProps);

/*Agregar propiedades al objecto*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs=4;

// Only change code above this line
let beagle = new Dog("Snoopy");

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");