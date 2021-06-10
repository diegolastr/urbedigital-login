import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacidadFisicaComponent } from './capacidad-fisica.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path:'dashboard/mantenimiento/capacidadFisica', component:CapacidadFisicaComponent},
      
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  
})
export class CapacidadFisicaRoutingModule { }
