import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUrbeComponent } from './login-urbe/login-urbe.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'login', component:LoginUrbeComponent},
      /* {path:'**', redirectTo:'login'} */
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
    
  ]
})
export class LoginRoutingModule { }
