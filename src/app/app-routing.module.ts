import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'',
  loadChildren:() => import('./dashboard/mantenimiento/capacidad-fisica/capacidad-fisica.module').then(m => m.CapacidadFisicaModule)},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: '**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
