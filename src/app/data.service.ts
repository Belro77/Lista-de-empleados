import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { EmpleadosService } from "./empleados.service";
//servicio dentro de otro servicio.

@Injectable()
export class EmpleadosServices{
    constructor(private servicioVentanaEmergente:EmpleadosService){}


    empleados:Empleado[]=[

        new Empleado("Juan","Diaz","Presidente" ,7500),
        new Empleado("Ana","martin","Directora" ,5500),
        new Empleado("María","Fernandez","Jefa sección" ,3500),
        new Empleado("Laura","López","Administrativo ",2500),
      
       ];
 
agregarEmpleadoServicio(empleado:Empleado){
       this.empleados.push(empleado);
 this.servicioVentanaEmergente.muestraMensaje("Persona se va a agregar : " +  "⧵n" + empleado.nombre  +  "⧵n"+ "salario + empleado.salario");
    }
  
    encontrarEmpleado  (indice:number)
    { let empleado:Empleado=this.empleados[indice];

        return empleado; }


   actualizarEmpleado(indice:number,empleado:Empleado)
      {
//lo que estamos haciendo es almacenar en empleadoModificado lo que viene despues del = 

let empleadoModificado=this.empleados[indice];
//el nombre tiene que ser igual a empleado.nombre ,es decir el nombre
//que le estamos pasando por parametro en la llamada tiene que almacenarse en empleadoModificado
empleadoModificado.nombre=empleado.nombre;
empleadoModificado.apellido=empleado.apellido;
empleadoModificado.salario=empleado.salario;
empleadoModificado.cargo=empleado.cargo;
      }


//Este metodo va a recibir al indice que va ser de tipo number
      eliminarEmpleado(indice:number)
      {
//Vamos a eliminar el empleado cuyo indice le estemos pasando gracias
// a la url con el parametro que le estemos pasando a este metódo 
this.empleados.splice(indice,1);
      }

//Le decimos que nuestro array empleados con elemento  splice es el encargado de eliminar que nos 
//elimine el elemento que le estemos pasando por el indice que le especificamos en el parametro del metodo ,le decimos que queremos eliminar 1 empleado
      }

     

