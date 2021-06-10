import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';

// modulos 
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

//component 
import { LoginUrbeComponent } from './login-urbe/login-urbe.component';
import { RestService } from '../rest.service';

@NgModule({
  declarations: [
    LoginUrbeComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    LoginRoutingModule
  ],
  providers: [
    RestService
  ]
})
export class LoginModule { }
