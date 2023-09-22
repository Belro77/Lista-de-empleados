import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { EmpleadosServices } from '../data.service';
@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit{

  constructor(private route:ActivatedRoute ,private router:Router,private miServicio:EmpleadosService, private DatosServicios:EmpleadosServices){}
 
    empleados:Empleado[]=[];

   ngOnInit(): void {
 
        this.accion=parseInt(this.route.snapshot.queryParams['accion']);

        this.empleados=this.DatosServicios.empleados;

       this.indice=this.route.snapshot.params['indice'];

       let empleado:Empleado=this.DatosServicios.encontrarEmpleado(this.indice);
       
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

     
 

    actualizarEmpleado(){
    if(this.accion==1){
      let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      this.DatosServicios.actualizarEmpleado(this.indice,miEmpleado);
      this.router.navigate(['Home']);
    }
    
    else{
      this.DatosServicios.eliminarEmpleado(this.indice);
      this.router.navigate(['Home']);
      }
    }
  

      accion:number;
}
