import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";


@Injectable()
export class DatosServices{
    //Inyectamos el HttpClient 
     //Creamos el metòdo para guardar los empleados.
    constructor(private httpClient:HttpClient){}
    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://empleados-95f5a-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
            response=>console.log("Se han guardado los empleados:"+ response),
        error=> console.log("Error:" + error),
            
        );

    }
   CargarEmpleados(){
    return this.httpClient.get('https://empleados-95f5a-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
   }

}