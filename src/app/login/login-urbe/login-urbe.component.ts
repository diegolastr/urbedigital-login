import { Component, OnInit } from '@angular/core';
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
      }, error => {

      }
    );
    console.log(form);
    console.log('Datos enviados');
    console.log('Authorization');
  }
}