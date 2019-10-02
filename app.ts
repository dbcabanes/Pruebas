//Funcion y funciones de Flecha//

function activar(quien?: string, objeto: string = "Batidora", cuando?: String) {
  let mensaje: String;

  if (cuando) {
    mensaje = `Ha sido ${quien} quien encendio la ${objeto} ${cuando}`;
  } else {
    mensaje = `${quien} quien encendio la ${objeto}`;
  }

  console.log(mensaje);
}

activar("Daniel", "Batidora", "");

/*
-A la hora de crear una función, si le añadimos un `?` detras del nombre de la variable, 
estamos diciendole que no es un dato obligatorio para ejecutarla.

-Si el primer valor no es obligatorio, el resto tampoco puede serlo
*/

//----------------------------------------------------------------------------------//
let miFuncion1 = function(a: any) {
  return a;
};

let miFuncion1F = (a: any) => a;

console.log(miFuncion1("normal"));
console.log(miFuncion1F("Flecha"));

//----------------------------------------------------------------------------------//

let miFuncion2 = function(a: any, b: any) {
  return `El resultado de a+b es ${a + b}`;
};

let miFuncion2F = (a: any, b: any) => a + b;

console.log(miFuncion2(1, 2));
console.log(miFuncion2F("1f ", " 2F"));

//----------------------------------------------------------------------------------//

let miFuncion3 = function(nombre: String) {
  nombre = nombre.toUpperCase();
  return nombre;
};
let miFuncion3F = (nombre: string) => nombre.toUpperCase();

console.log(miFuncion3("Dani"));
console.log(miFuncion3F("Daniel"));

//----------------------------------------------------------------------------------//

let nombre = "Pedro";
let hulk = {
  nombre: "Hulk",
  smash() {
    setTimeout(() => console.log(this.nombre + " smash!!"), 1500);
  }
}
hulk.smash();

//Si utilizamos el This, dentro de la funcion de flecha, el console-log de nombre será Hulk
//Si quitamos el this, el console-log de nombre sera pedro
//Si esto no fuese una funcion de flecha, el nombre que imprime con el this, seria pedro  

