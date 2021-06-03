import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //modulo de forms 

@Component({
  selector: 'app-login-urbe',
  templateUrl: './login-urbe.component.html',
  styleUrls: ['./login-urbe.component.css']
})
export class LoginUrbeComponent implements OnInit {
  form: FormGroup

  constructor( private fb: FormBuilder) {  // formulario de validacion
    this.form = this.fb.group({
      user: ['', Validators.required], 
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  
  validate(){
     
    const user = this.form.value.user;
    const password = this.form.value.password;

    
    console.log(this.form);
   }
}
