import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUrbeComponent } from './login-urbe/login-urbe.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


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
    MatToolbarModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule

  ],
  exports:[
    LoginUrbeComponent
  ]
})
export class LoginModule { }
