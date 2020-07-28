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