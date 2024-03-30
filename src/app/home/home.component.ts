
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { EmpleosService } from '../Empleo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 constructor(private EmpleosService:EmpleosService){
 // Almacenamos  la información que viene de la inyección  del servicio.

 }
 
 empleados:Empleado[]=[];

    ngOnInit(): void {
    // this.empleados=this.EmpleosService.empleados;
   this.EmpleosService.obtenerEmpleados().subscribe(misEmpleados=>{console.log(misEmpleados);
  this.empleados=misEmpleados=Object.values(misEmpleados);
  });


  }
 
 
 
 
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number= 0;
}
  
