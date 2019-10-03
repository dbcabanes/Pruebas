//Uso de let y const
var nombreExa = "Ricardo Milas";
var edadExa = 23;
var PERSONAJE = {
    nombreExa: nombreExa,
    edadExa: edadExa
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-jitsu"]
};
//Convertir esta funcion a una funcion flecha
/*

function resultadoDoble(a, b) {
  return (a + b) * 2;
}

*/
var resultadoDoble = function (a, b) { return (a + b) * 2; };
/* Función con parametros obligatorios, opcionales y por defecto
donde:

    NOMBRE = obligatorio
    PODER  = opcional
    ARMA   = por defecto = "arco"
  
    */
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma " + arma;
        //mensaje = nombre + "tiene el poder de:" + poder + "y un arma " + arma;
        console.log(mensaje);
    }
    else {
        mensaje = nombre + " tiene un " + poder;
        //mensaje = nombre + " tiene un " + poder;
        console.log(mensaje);
    }
}
/* Cree una clase que permita manejar la esiguiente estructura
    La clase se debe de llar rectangulo,
    debe tener dos propiedades:
    * base
    * altura
    
Tambien un método que calcule el area = base * altura,
ese metodo debe retornar un número
*/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
