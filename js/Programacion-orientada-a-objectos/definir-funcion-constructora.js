/*Los constructores son funciones que crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piense en ellos como un plan para la creación de nuevos objetos.
Los constructores se definen con un nombre en mayúscula*/


function Dog(){
    this.name ="string";
    this.color= "";
    this.numLegs= 4;
  }

  /* Constructor que recibe por prametros*/
function Dog( name, color) {
    this.name= name;
    this.color= color;
    this.numLegs= 4;
  
  }
  
  let terrier =new Dog("Roman", "marron")
  