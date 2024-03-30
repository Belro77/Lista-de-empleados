import { Component ,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleosService } from '../Empleo.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private EmpleosService:EmpleosService,private router:Router,
    
    ){}

  ngOnInit(): void {
   this.empleados=this.EmpleosService.empleados;
//this.dataService.obtenerEmpleados().subscribe((misEmpleados: any)=>{
  //console.log(misEmpleados);ActivatedRoute, 
//this.empleados=this.EmpleadosService.empleados;,private route:ActivatedRoute 

   

}
indice:number
empleados:Empleado[]=[];
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
this.EmpleosService.agregarEmpleadoServicio(miEmpleado)
this.router.navigate(['Home']);

  }

   //this.dataService.agregarEmpleado(miEmpleado);
   //this.router.navigate(['Home']);
  
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number= 0;

volverHome(){
//El navigate es el encargado de llevarnos a donde queramos


}
accion:number;
}