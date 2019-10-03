//Uso de let y const
let nombreExa: string = "Ricardo Milas";
let edadExa: number = 23;

const PERSONAJE: { nombreExa: string; edadExa: number } = {
  nombreExa: nombreExa,
  edadExa: edadExa
};

//Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre: String;
  artesMarciales: string[];
}
let batman: Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-jitsu"]
};

//Convertir esta funcion a una funcion flecha
/*

function resultadoDoble(a, b) {
  return (a + b) * 2;
}

*/

let resultadoDoble = (a: number, b: number) => (a + b) * 2;

/* Función con parametros obligatorios, opcionales y por defecto
donde:

    NOMBRE = obligatorio
    PODER  = opcional
    ARMA   = por defecto = "arco"
  
    */

function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
  let mensaje: string;
  if (poder) {
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma ${arma}`;
    //mensaje = nombre + "tiene el poder de:" + poder + "y un arma " + arma;
    console.log(mensaje);
  } else {
    mensaje = `${nombre} tiene un ${poder}`;
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

class Rectangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  calcularArea(): number {
    return this.base * this.altura;
  }
}
