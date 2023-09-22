import { Component ,Input} from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;
  
// Creamos un array que recoja las caracteristicas que iremos agregando a cada empleado 

 arrayCaracteristicas= [''];

  agregarCaracteristica(nuevaCaracteristica: string){

    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
