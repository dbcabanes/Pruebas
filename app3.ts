interface Xmen{
    nombre:String,
    poder:String
}
//Crear una interfaz es como crear una estructura y datos obligatorios 

function enviarMision (xmen:Xmen){
    console.log("Eniviando a "+ xmen.nombre);
}

let wolverine = {
    nombre:"Wolverine",
    poder: "Regeneracion"
};


enviarMision(wolverine);