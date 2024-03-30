import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { EmpleadosService } from "./empleados.service";
import { DatosServices } from "./Datos.services";

@Injectable()
export class EmpleosService{
 
    constructor(private ServicioVentanaEmergente: EmpleadosService ,private DatosServices:DatosServices){

        
    }
//Nos devuelva el resultado de llamar al metodo que esta en 
//en el otro metodo
obtenerEmpleados(){
  return this.DatosServices.CargarEmpleados();
}
    empleados:Empleado[]=[]

/*new Empleado("Juan", "Diaz", "Presidente",7500)
];*/


agregarEmpleadoServicio(empleado:Empleado){
 this.empleados.push(empleado); this.ServicioVentanaEmergente.muestraMensaje(
 "Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario:" +
  empleado.salario);
  this.empleados.push(empleado);
  this.DatosServices.guardarEmpleados(this.empleados);

}
}