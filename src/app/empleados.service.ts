import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//nos trae un export para que podamos utilizarlo en cualquier punto de nuestro proyecto.

export class EmpleadosService {

  constructor() { }
//A este método vamos a hacer que reciba como parámetro de tipo string.
  muestraMensaje(mensaje:string){
  
    alert(mensaje);

  }


}
