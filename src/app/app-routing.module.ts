import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUrbeComponent } from './login/login-urbe/login-urbe.component';

const routes: Routes = [
  {path: 'login',component: LoginUrbeComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: '**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
