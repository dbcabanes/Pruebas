//Funcion y funciones de Flecha//
function activar(quien, objeto, cuando) {
    if (objeto === void 0) { objeto = "Batidora"; }
    var mensaje;
    if (cuando) {
        mensaje = "Ha sido " + quien + " quien encendio la " + objeto + " " + cuando;
    }
    else {
        mensaje = quien + " quien encendio la " + objeto;
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
var miFuncion1 = function (a) {
    return a;
};
var miFuncion1F = function (a) { return a; };
console.log(miFuncion1("normal"));
console.log(miFuncion1F("Flecha"));
//----------------------------------------------------------------------------------//
var miFuncion2 = function (a, b) {
    return "El resultado de a+b es " + (a + b);
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion2(1, 2));
console.log(miFuncion2F("1f ", " 2F"));
//----------------------------------------------------------------------------------//
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) { return nombre.toUpperCase(); };
console.log(miFuncion3("Dani"));
console.log(miFuncion3F("Daniel"));
//----------------------------------------------------------------------------------//
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
//Si utilizamos el This, dentro de la funcion de flecha, el console-log de nombre será Hulk
//Si quitamos el this, el console-log de nombre sera pedro
//Si esto no fuese una funcion de flecha, el nombre que imprime con el this, seria pedro  
