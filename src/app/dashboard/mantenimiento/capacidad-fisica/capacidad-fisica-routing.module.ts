import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacidadFisicaComponent } from './capacidad-fisica.component';
import { EditarEspacioComponent } from './editar-espacio/editar-espacio.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path:'dashboard/mantenimiento/capacidadFisica', component:CapacidadFisicaComponent},
      {path:'dashboard/mantenimiento/capacidadFisica/editar', component:EditarEspacioComponent},

      
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  
})
export class CapacidadFisicaRoutingModule { }
