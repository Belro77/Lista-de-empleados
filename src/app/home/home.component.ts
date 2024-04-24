
import { Component, OnInit,Input} from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { EmpleosService } from '../Empleo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo='listado de Empleados.'
 constructor(private EmpleosService:EmpleosService,private EmpleadosService:EmpleadosService){
 // Almacenamos  la información que viene de la inyección  del servicio.

 }

 empleados:Empleado[]=[];

    ngOnInit(): void {
     //this.empleados=this.EmpleosService.empleados;
     this.EmpleosService.obtenerEmpleados().subscribe(misEmpleados=>
      {console.log(misEmpleados);
    this.empleados=Object.values(misEmpleados);
    this.EmpleosService.setEmpleados(this.empleados);})
   
  }

  
 
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number= 0;
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    
    this.EmpleosService.agregarEmpleadoServicio(miEmpleado);
    
    }
       
 
    
 
  }

 
  //Inyectamos dos servicios .
 


 
 