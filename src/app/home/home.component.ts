import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { EmpleadosServices } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo='listado de Empleados.'
  //Inyectamos dos servicios .
 
 constructor(private miServicio:EmpleadosService, private DatosServicios:EmpleadosServices){
 // Almacenamos  la información que viene de la inyección  del servicio.
 
 }
 
 empleados:Empleado[]=[];
 
  agregarEmpleado(){
 //let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
 
 
// this.DatosServicios.agregarEmpleadoServicio(miEmpleado);
 }
    ngOnInit(): void {
     this.empleados=this.DatosServicios.empleados;
    }
 
 
 
 
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number= 0;
}
