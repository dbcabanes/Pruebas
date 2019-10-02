// DESTRUCTURACION//

let avenger = {
    nombres: "Steve",
    clave: "Capitan america",
    poder: "Drogas"
}

let { poder, nombres, clave} = avenger;

/*Si despues de el nombre se pone otro nombre "poder:ataque, clave:nickName"
    de esta manera le estamos asignando alias a los componentes del Avenger
    Type script ta sabe que son STRINGS
*/


/* Esto es lo mismo que lo de arriba pero hecho en partes */

//let nombres = avenger.nombres;
//let clave = avenger.clave;
//let poder = avenger.poder;

console.log (nombres+ " es " + clave + " porque consume " + poder);


// ------------------------------------------------------------------------------------- //

let avengers:String[] = [ "Thor", "Steve", "Tony"];

//Para desestructurar un arreglo, los nombres que asignemos, son por orden, si queremos saltarnos alguno, simplemente ponemso el espacio entre las comas
//let [thor, , ironman] = avengers; <--- en este nos habriamos saltado al capi

let [thor, capi, ironman] = avengers;

//En el console log no tenemos por que llamrlos a todos
console.log(thor, capi, ironman);