import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { EmpleadosComponent } from './empleados/empleados.component';
import { CaracteristicasDeEmpleadosComponent } from './caracteristicas-de-empleados/caracteristicas-de-empleados.component';
import { EmpleadosService } from './empleados.service';
import {  EmpleadosServices} from './data.service';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';


const appRoutes:Routes= [
  {path:'Home',component:HomeComponent},
  {path:'Proyectos',component:ProyectosComponent},
  {path:'Contacto',component:ContactoComponent},
  {path:'QuienesSomos',component:QuienesSomosComponent},
  {path:'actualiza/:indice',component:ActualizaComponent},
  {path:'actualiza/:indice',component:ActualizaComponent},
  {path:'**',component:ErrorPersonalizadoComponent},
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
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpleadosService,  EmpleadosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
