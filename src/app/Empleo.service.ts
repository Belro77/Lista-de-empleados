import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { EmpleadosService } from "./empleados.service";
import { DatosServices } from "./Datos.services";

@Injectable()
export class EmpleosService{
 
    constructor(private ServicioVentanaEmergente: EmpleadosService ,private DatosServices:DatosServices){

        
    }
    empleados:Empleado[]=[];
//Nos devuelva el resultado de llamar al metodo que esta en 
//en el otro metodo
obtenerEmpleados(){
  return this.DatosServices.CargarEmpleados();
}
   
setEmpleados(misEmpleados:Empleado[]){
  this.empleados=misEmpleados;
  
   }




agregarEmpleadoServicio(empleado:Empleado){

 this.ServicioVentanaEmergente.muestraMensaje(
 "Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario:" +
  empleado.salario);
 this.empleados.push(empleado);
  this.DatosServices.guardarEmpleados(this.empleados);

}
encontrarEmpleado(indice:number)
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
this.DatosServices.actualizarEmpleados(indice,empleado);
    }
    eliminarEmpleado(indice:number)
    {
      this.empleados.splice(indice);
     this.DatosServices.eliminarEmpleados(indice);
     this.DatosServices.guardarEmpleados(this.empleados);
    }
}