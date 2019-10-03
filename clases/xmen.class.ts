export class Xmen{
    nombre:string;
    clave:String;
    
    constructor(nombre:string, clave:string){
        this.nombre=nombre;
        this.clave = clave;
    }

    imprimir(){
        console.log(`${this.nombre} - ${this.clave}`);
        
    }
}