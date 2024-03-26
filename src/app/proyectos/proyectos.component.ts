import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { EmpleadosServices } from '../data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  constructor(private router:Router,private miServicio:EmpleadosService, private DatosServicios:EmpleadosServices){}
  agregarEmpleadoServicio(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    
    
    this.DatosServicios.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['Home']);
    }
       ngOnInit(): void {
        this.empleados=this.DatosServicios.empleados;

       }
    
       empleados:Empleado[]=[];
    
    
     cuadroNombre:string="";
     cuadroApellido:string="";
     cuadroCargo:string="";
     cuadroSalario:number= 0;

  volverHome(){
    //El navigate es el encargado de llevarnos a donde queramos

  }
}
