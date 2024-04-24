import { Injectable } from "@angular/core";
import{Router} from "@angular/router";

import firebase from 'firebase/compat/app';
import  'firebase/compat/auth'


@Injectable()
export class LoginService{
    constructor(private router:Router){}
    token:string;//Aqui se almacena
   //Este mètodo que sera llamado desde el formulario. Va arecibir por parametro el email y password. Y es este metódo
   //El que debe autenticarse en la base de datos en este caso con email y password
    login(email:string, password:string){
        //Este metódo va a recibir lo que viene del form osea el email y el password ,ahora es cuando el servidor firease
        //nos va a dar una respuesta.
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            response=>{
                //para procesar la promesa usamos el mètodo then ,le decimos que en la respuesta de firebas tiene que al usuario que se esta atenticando y capturar
                //el token y retornar redirigir a la pàgina de inicio una vez hecho el login 
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token=token;
                        this.router.navigate(['/Home']);
                    }
                )
            }
        );
    }
    //A este método le decimos que devuelva el token 
    getIdToken(){
        return this.token;
    }
}