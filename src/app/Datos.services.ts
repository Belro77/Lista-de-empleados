import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from './login/login.service';

@Injectable()
export class DatosServices{
    //Inyectamos el HttpClient 
     //Creamos el metòdo para guardar los empleados.
    constructor(private httpClient:HttpClient,private loginService:LoginService){}
    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://empleados-95f5a-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
            response=>console.log("Se han guardado los empleados:"+ response),
     error=> console.log("Error:" + error), 
            
        );

    }
   CargarEmpleados(){
    //Creamos una constante donde cargaremos la firma y llamamos al metodo que nos devolvia el token  y ahora debemos agregar en la url donde estamos
   //Obteniendo nuestros registros a continuaciòn del json ponemos un signo de pregunta y la autenticación lo concatenamos con el token
   //autenticaciòn
    const token=this.loginService.getIdToken();
    return this.httpClient.get('https://empleados-95f5a-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token);
   }

//El indice recibira el nùmero de acuerdo como vayamos actualizando los empleados. 
actualizarEmpleados(indice:number,empleado:Empleado){

let url='https://empleados-95f5a-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
this.httpClient.put(url,empleado).subscribe(
    response=>console.log("Se ha modificado correctamente:" + response),
error=> console.log("Error: " + error),
);   

}

eliminarEmpleados(indice:number){

    let url='https://empleados-95f5a-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    this.httpClient.delete(url).subscribe(
        response=>console.log("Se ha eliminado correctamente:" + response),
    error=> console.log("Error: " + error),
    );   
    
    }
}