//creacion de una clase con su constructor
//Se pueden crear las clases con .class.ts en otra carpeta qwue sea para clses
class Avenger {
  nombre: string;
  equipo: string;
  nombreReal: string;

  peleasGanadas: number = 0;
  puedePelear: boolean; //Este error aparece porque no esta inicializada de ninguna manera y tampoco esta en el constructor, aunque funciona


  constructor(nombre:string, equipo:string, nombreReal:string){
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
  }
}

//Inicializacion de la clase y asignacion de valores
let antman: Avenger = new Avenger("Antman" , "Cap", "Scott");
console.log(antman);
