//creacion de una clase con su constructor
//Se pueden crear las clases con .class.ts en otra carpeta qwue sea para clses
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
//Inicializacion de la clase y asignacion de valores
var antman = new Avenger("Antman", "Cap", "Scott");
console.log(antman);
