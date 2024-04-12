

import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

import { EmpleosService } from '../Empleo.service';


@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit{



  constructor(private route:ActivatedRoute ,private router:Router, private EmpleadosService:EmpleadosService ,private EmpleosService:EmpleosService){}
 
    empleados:Empleado[]=[];
    

   ngOnInit(): void {
    //para que no nos dee  error y nos tome como un valor entero la url usamos parse-int  
     
        this.accion=parseInt(this.route.snapshot.queryParams['accion']);


//en this acción esta almacenando 1 o 2 depende la acción que solicitamos .
        this.empleados=this.EmpleosService.empleados;

       this.indice=this.route.snapshot.params['indice'];

       let empleado:Empleado=this.EmpleosService.encontrarEmpleado(this.indice);
       
       this.cuadroNombre=empleado.nombre; 
       this.cuadroApellido=empleado.apellido; 
       this.cuadroSalario=empleado.salario;
       this.cuadroCargo=empleado.cargo;
     
 
       }
    
   
        
       cuadroNombre:string="";
       cuadroApellido:string="";
       cuadroCargo:string="";
       cuadroSalario:number= 0;
  
     indice:number

     
//Ahora vamos a modificar este botón para que en vez de que agregue ,modifique la información 
// Ponemos un if que lo que sea almacenando en acción es igual a 1 en ese caso tiene que hacer las 3 lineas que actualiza 

    actualizarEmpleado(){
    if(this.accion==1){
      let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      this.EmpleosService.actualizarEmpleado(this.indice,miEmpleado);
      this.router.navigate(['Home']);
    
    }
    //Y si no sucede el valor 1 tome el valor 2 osea las 2 líneas de eliminar 
    else{

      this.EmpleosService.eliminarEmpleado(this.indice);
      this.router.navigate(['Home']);
    
      }
    }
 

      accion:number;
  }

  

