export class Villanos{
    nombre:string;
    plan:String;
    
    constructor(nombre:string, plan:string){
        this.nombre=nombre;
        this.plan = plan;
    }

    imprimir(){
        console.log(`El plan de ${this.nombre} es ${this.plan}`);
        
    }
}