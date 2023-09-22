import { Component, EventEmitter,OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-caracteristicas-de-empleados',
  templateUrl: './caracteristicas-de-empleados.component.html',
  styleUrls: ['./caracteristicas-de-empleados.component.css']
})
export class CaracteristicasDeEmpleadosComponent implements OnInit {

  
     // nombre del @output podemos ponerle el que queramos
@Output() CaracteristicasDeEmpleados=new EventEmitter<string>();//--> Es el tipo de output en este caso string.

// en este caso el flujo de datos que  va ir del hijo al padre sera de ese tipo. El new EventEmitter.

//le dice Le dice a Angular que cree un nuevo emisor de eventos es decir el evento que hara que se emita cierta información y de que tipo sera el dato.



//constructor(private miServicio:EmpleadosService){}
ngOnInit(): void {
  
}
agregarCaracteristicas(value: string)  {
  //this.miServicio.muestraMensaje(value);
  //this.CaracteristicasDeEmpleados.emit(value);

}
}
//Este es un metodo que nos dice que la función agrega un nuevo item.Este metodo hace el verdadero trabajo de lanzar ese flujo de datos 
//del hijo al padre.Con el string que se supone que el usuario introducira  en el input .En el primero ponemos el nombre que queramos 
//En el segundo el nombre de nuestro componente 
