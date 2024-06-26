import {  InjectionToken,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AngularFireModule } from '@angular/fire';
//import { environment } from '../environments/environment';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CaracteristicasDeEmpleadosComponent } from './caracteristicas-de-empleados/caracteristicas-de-empleados.component';
import {EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DatosServices } from './Datos.services';
import {HttpClientModule} from'@angular/common/http';
import { EmpleosService } from './Empleo.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

const appRoutes:Routes= [
  {path:'Home',component:HomeComponent},
  {path:'Proyectos',component:ProyectosComponent},
  {path:'Contacto',component:ContactoComponent},
  {path:'QuienesSomos',component:QuienesSomosComponent},
  {path:'login',component:LoginComponent},
  {path:'actualiza/:indice',component:ActualizaComponent},

 
  
 // {path:'**',component:ErrorPersonalizadoComponent},
];
@NgModule({  
  declarations: [
    AppComponent,
    
    EmpleadosComponent,
    CaracteristicasDeEmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    QuienesSomosComponent,
    ProyectosComponent,
    ActualizaComponent,
    ErrorPersonalizadoComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],

  providers: [EmpleadosService,EmpleosService,DatosServices,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
