import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEspacioComponent } from './agregar-espacio/agregar-espacio.component';
import { CapacidadFisicaComponent } from './capacidad-fisica.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path:'dashboard/mantenimiento/capacidadFisica', component:CapacidadFisicaComponent},
      {path:'dashboard/mantenimiento/capacidadFisica/agregar', component:AgregarEspacioComponent},

      
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  
})
export class CapacidadFisicaRoutingModule { }
