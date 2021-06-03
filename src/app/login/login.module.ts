import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUrbeComponent } from './login-urbe/login-urbe.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    LoginUrbeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule

  ],
  exports:[
    LoginUrbeComponent
  ]
})
export class LoginModule { }
