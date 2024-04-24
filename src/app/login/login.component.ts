import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import{Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor(private loginService:LoginService,private router:Router){}
ngOnInit(): void {
  
}
// En este caso debemos inyectar el servicio del login 
//traemos el form ,guardamos en estas dos variables  el email y el password
login(form:NgForm){
const email=form.value.email
const password=form.value.password
//Aqui traemos el mètodo creado en el servicio y le
//pasamos por parametro el email y login aqui creado 
this.loginService.login(email,password);
this.router.navigate(['/Home']);

}
}
