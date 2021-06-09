import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //modulo de forms 
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestService, User } from 'src/app/rest.service';


@Component({
  selector: 'app-login-urbe',
  templateUrl: './login-urbe.component.html',
  styleUrls: ['./login-urbe.component.css']
})

export class LoginUrbeComponent implements OnInit {
  form: FormGroup;
  loading = false;
  hide= true;

  constructor(private formBuilder: FormBuilder,
    private RestServices: RestService,
    private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  sendData(form: any): void {
    this.RestServices.login(form).subscribe(
      response => {
        this.RestServices.saveToken(response.headers.get('Authorization'));
        this.fakeLoading();
        console.log('Datos enviados');
        console.log(form);
      }, error => {
        this.errorStatus();
      }
    );
  }
  errorStatus() {
    this.form.reset();
    this._snackBar.open('Usuario o contraseña ingresado invalidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

  fakeLoading() {
    this.loading = false;
    setTimeout(() => {
      // redireccionar a l dashboard
      this.loading = true;
    }, 1000);
  }
}